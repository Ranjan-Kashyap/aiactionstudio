import { homeFaqs } from "./home-copy";

export default function HomeFaqAccordion() {
  return (
    <div className="home-faq w-full">
      {homeFaqs.map((faq) => (
        <details
          key={faq.question}
          className="group border-b border-sand"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-[22px] text-left text-[18px] font-medium text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint">
            {faq.question}
          </summary>
          <p className="pb-6 pr-10 text-[16px] leading-relaxed text-slate">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
