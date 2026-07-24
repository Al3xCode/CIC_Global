import Link from "next/link";
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
                className="group grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
