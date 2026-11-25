import test from "node:test";
import assert from "node:assert/strict";
import { calculateScore } from "../content/ai-score.ts";

test("calculateScore — all-zero answers return 0/100 and Manual-first band", () => {
  const result = calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  assert.equal(result.overall, 0);
  assert.equal(result.band, "Manual-first");
  for (const cat of result.categories) {
    assert.equal(cat.points, 0);
    assert.equal(cat.percentage, 0);
  }
  assert.equal(result.recommendations.length, 3);
});

test("calculateScore — all-max answers return 100/100 and AI-ready band", () => {
  const result = calculateScore([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
  assert.equal(result.overall, 100);
  assert.equal(result.band, "AI-ready");
  for (const cat of result.categories) {
    assert.equal(cat.points, cat.maxPoints);
    assert.equal(cat.percentage, 100);
  }
  assert.equal(result.recommendations.length, 3);
});

test("calculateScore — mixed case calculates exact category percentages and band", () => {
  // Q1 (systems_data): idx 2 -> 7 pts
  // Q2 (systems_data): idx 3 -> 10 pts  => systems_data = 17/20 = 85%
  // Q3 (processes):    idx 1 -> 3 pts
  // Q4 (people_ai):    idx 2 -> 7 pts
  // Q5 (processes):    idx 2 -> 7 pts
  // Q6 (people_ai):    idx 1 -> 3 pts
  // Q7 (people_ai):    idx 2 -> 7 pts   => people_ai = 17/30 = 57%
  // Q8 (risk_security):idx 0 -> 0 pts
  // Q9 (risk_security):idx 1 -> 3 pts   => risk_security = 3/20 = 15%
  // Q10(processes):    idx 1 -> 3 pts   => processes = 13/30 = 43%
  // Total = 17 + 13 + 17 + 3 = 50 => "Getting started" (40-59)
  const result = calculateScore([2, 3, 1, 2, 2, 1, 2, 0, 1, 1]);
  assert.equal(result.overall, 50);
  assert.equal(result.band, "Getting started");

  const byKey = Object.fromEntries(result.categories.map((c) => [c.key, c]));
  assert.equal(byKey.systems_data.percentage, 85);
  assert.equal(byKey.processes.percentage, 43);
  assert.equal(byKey.people_ai.percentage, 57);
  assert.equal(byKey.risk_security.percentage, 15);

  // Lowest category is risk_security (15%), followed by processes (43%)
  assert.equal(result.recommendations[0].category, "risk_security");
  assert.equal(result.recommendations[1].category, "risk_security");
  assert.equal(result.recommendations[2].category, "processes");
});

test("calculateScore — missing or invalid answer throws an error", () => {
  assert.throws(() => calculateScore([0, 0, 0]), /Expected 10 answers/);
  assert.throws(
    () => calculateScore([0, 1, 2, 3, 4, 0, 0, 0, 0, 0]),
    /Invalid or missing answer for question 5/,
  );
  assert.throws(
    () =>
      calculateScore({
        1: 0,
        2: 0,
        // missing question 3..10
      }),
    /Invalid or missing answer for question 3/,
  );
});
