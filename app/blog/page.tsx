import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { articles, formatDate } from "@/lib/site";

export const metadata = pageMeta({
  title: "Blog",
  description:
    "Finanzen verstehen, Vermögen aufbauen, Zukunft sichern: Beiträge von CIC-Global zu Absicherung, Altersvorsorge und Vermögensaufbau.",
  path: "/blog",
});

export default function Blog() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">
          Finanzen verstehen. Vermögen aufbauen. Zukunft sichern.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fg-muted">
          Ihre Lebenssituation verändert sich — und damit auch Ihre finanziellen Ziele. Genau hier
          setzen wir an.
        </p>

        <ul className="mt-14 border-t border-white/8">
          {articles.map((a) => (
            <li key={a.slug} className="border-b border-white/8">
              <Link
                href={`/blog/${a.slug}`}
                className="group relative grid gap-2 py-8 transition-colors sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pr-8 sm:hover:bg-white/[0.03]"
              >
                <div className="flex flex-col gap-1 font-mono text-2xs uppercase tracking-[0.14em] text-fg-muted sm:pt-2">
                  <time dateTime={a.date} className="tnum">
                    {formatDate(a.date)}
                  </time>
                  <span className="tnum">{a.readingTime}</span>
                </div>
                <div>
                  <h2 className="text-lg transition-colors group-hover:text-gold lg:text-xl">
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-fg-muted">{a.lead}</p>
                </div>
                <ArrowRight
                  aria-hidden
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-2 top-1/2 hidden -translate-y-1/2 translate-x-2 text-gold opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
