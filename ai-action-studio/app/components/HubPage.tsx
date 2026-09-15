import Link from "next/link";
import LeadForm from "./LeadForm";

export type HubTeaser = string | { title: string; href?: string };

type HubPageProps = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  copy: string;
  supporting?: string;
  teasers?: HubTeaser[];
  blogLinks?: { href: string; label: string }[];
  children?: React.ReactNode;
  source: string;
};

function teaserTitle(item: HubTeaser) {
  return typeof item === "string" ? item : item.title;
}

function teaserHref(item: HubTeaser) {
  return typeof item === "string" ? undefined : item.href;
}

export default function HubPage({
  eyebrow,
  heading,
  subheading,
  copy,
  supporting,
  teasers,
  blogLinks,
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
        {subheading ? (
          <p className="mt-3 text-[18px] font-semibold leading-snug text-navy">{subheading}</p>
        ) : null}
        <p className="mt-5 text-[17px] leading-relaxed text-slate">{copy}</p>
        {supporting ? (
          <p className="mt-4 text-[16px] leading-relaxed text-slate">{supporting}</p>
        ) : null}
        {children}
        {teasers && teasers.length > 0 ? (
          <div className="mt-10 space-y-8">
            {teasers.some((item) => teaserHref(item)) ? (
              <div>
                <h2 className="text-[18px] font-semibold text-navy">Start here</h2>
                <ul className="mt-4 grid gap-3">
                  {teasers
                    .filter((item) => teaserHref(item))
                    .map((item) => {
                      const title = teaserTitle(item);
                      const href = teaserHref(item)!;
                      return (
                        <li key={title}>
                          <Link
                            href={href}
                            className="block rounded-xl border border-sand bg-white p-5 text-[15px] font-medium text-navy transition hover:border-mint"
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : null}
            {teasers.some((item) => !teaserHref(item)) ? (
              <div>
                <h2 className="text-[18px] font-semibold text-navy">What&apos;s coming</h2>
                <ul className="mt-4 grid gap-3">
                  {teasers
                    .filter((item) => !teaserHref(item))
                    .map((item) => {
                      const title = teaserTitle(item);
                      return (
                        <li
                          key={title}
                          className="rounded-xl border border-sand bg-white p-5 text-[15px] font-medium text-navy"
                        >
                          {title}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
        {blogLinks && blogLinks.length > 0 ? (
          <p className="mt-10 text-[15px] leading-relaxed text-slate">
            {blogLinks.length === 1 && blogLinks[0] ? (
              <Link
                href={blogLinks[0].href}
                className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
              >
                {blogLinks[0].label}
              </Link>
            ) : (
              <>
                More on the blog:{" "}
                {blogLinks.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? (index === blogLinks.length - 1 ? " and " : ", ") : null}
                    <Link
                      href={link.href}
                      className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
                .
              </>
            )}
          </p>
        ) : null}
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
