import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, formatDate, site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const url = `${site.url}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.lead,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${article.title} | ${site.name}`,
      description: article.lead,
      url,
      publishedTime: article.date,
      locale: "de_DE",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.lead,
    datePublished: article.date,
    inLanguage: "de-DE",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
  };

  return (
    <article>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <Link
          href="/blog"
          className="group inline-flex min-h-11 items-center gap-2 text-sm text-ink-fg-muted transition-colors hover:text-gold"
        >
          <ArrowLeft
            size={15}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Alle Beiträge
        </Link>

        <div className="mt-8 flex gap-4 font-mono text-2xs uppercase tracking-[0.14em] text-ink-fg-muted">
          <time dateTime={article.date} className="tnum">
            {formatDate(article.date)}
          </time>
          <span className="tnum">{article.readingTime}</span>
        </div>

        <h1 className="mt-5 text-[2rem] sm:text-2xl lg:text-3xl">{article.title}</h1>
        <p className="mt-6 text-lg text-ink-fg-muted">{article.lead}</p>

        <hr className="mt-12 border-ink/10" />

        <div className="prose-cic mt-12 text-ink-fg-muted">
          {article.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}

          {article.sections?.map((s) => (
            <section key={s.heading} className="mb-12 last:mb-0">
              <h2 className="mb-5 text-xl text-ink-fg">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10">
          <p className="text-lg">Klingt nach Ihrer Situation?</p>
          <p className="mt-3 text-sm text-ink-fg-muted">
            Im kostenlosen Erstgespräch schauen wir uns an, wo Sie stehen.
          </p>
          <Link
            href="/kontakt"
            className="btn-primary mt-7 inline-flex min-h-12 items-center px-6 text-sm font-medium"
          >
            Erstgespräch vereinbaren
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
