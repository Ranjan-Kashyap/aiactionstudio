import LeadForm from "./LeadForm";

type HubPageProps = {
  eyebrow: string;
  heading: string;
  copy: string;
  supporting?: string;
  children?: React.ReactNode;
  source: string;
};

export default function HubPage({
  eyebrow,
  heading,
  copy,
  supporting,
  children,
  source,
}: HubPageProps) {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
          {heading}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-slate">{copy}</p>
        {supporting ? (
          <p className="mt-4 text-[16px] leading-relaxed text-slate">{supporting}</p>
        ) : null}
        {children}
        <div className="mt-12 rounded-xl border border-sand bg-white p-6 md:p-8">
          <h2 className="text-[20px] font-semibold text-navy">Stay in the loop</h2>
          <p className="mt-2 mb-6 text-[14px] text-slate">
            Get practical AI ideas, useful tools, workflows and resources — without the noise.
          </p>
          <LeadForm
            source={source}
            submitLabel="Join the AI Action Studio List"
            successMessage="You're in. Watch your inbox for practical AI ideas."
          />
        </div>
      </div>
    </section>
  );
}
