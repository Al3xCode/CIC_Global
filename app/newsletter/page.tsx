import { NewsletterForm } from "@/components/NewsletterForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Newsletter",
  description:
    "Alle paar Wochen eine E-Mail von CIC-Global: konkrete Hinweise zu Vorsorge, Absicherung und Vermögensaufbau — ohne Produktwerbung.",
  path: "/newsletter",
});

const topics = [
  {
    title: "Was sich gesetzlich ändert",
    body: "Neue Fristen, Freibeträge und Förderungen — übersetzt in das, was es für Sie konkret bedeutet.",
  },
  {
    title: "Wo Verträge Geld liegen lassen",
    body: "Wiederkehrende Muster aus unseren Analysen: Stellen, an denen Kunden regelmäßig zu viel zahlen.",
  },
  {
    title: "Wann welcher Schritt dran ist",
    body: "Berufseinstieg, Familiengründung, Selbstständigkeit — welche Entscheidung zu welchem Zeitpunkt zählt.",
  },
];

export default function Newsletter() {
  return (
    <>
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Newsletter</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">
            Alle paar Wochen eine E-Mail, die sich lohnt.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-fg-muted">
            Kein Produktversand, keine Werbeflut. Nur das, was gerade wichtig ist — und was Sie
            daraus machen können.
          </p>

          <div className="mt-12">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="text-xl lg:text-2xl">Worum es geht</h2>
          <ul className="mt-10 border-t border-ink/8">
            {topics.map((t) => (
              <li key={t.title} className="grid gap-2 border-b border-ink/8 py-6 sm:grid-cols-[16rem_1fr] sm:gap-8">
                <h3 className="text-lg">{t.title}</h3>
                <p className="text-sm text-ink-fg-muted">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
