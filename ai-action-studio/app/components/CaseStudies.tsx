export type CaseStudyItem = {
  title: string;
  summary: string;
  outcome?: string;
};

// TODO: owner to supply verified client case studies before populating this array.
const CASE_STUDIES: CaseStudyItem[] = [];

export default function CaseStudies() {
  if (CASE_STUDIES.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-sand bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
          Case studies
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.title}
              className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
            >
              <h3 className="text-[20px] font-semibold text-navy">{study.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{study.summary}</p>
              {study.outcome ? (
                <p className="mt-4 text-[14px] font-semibold text-navy">{study.outcome}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
