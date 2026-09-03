/**
 * Alle Inhalte an einer Stelle. Texte stammen von der bestehenden Seite
 * cic-global.de, Tippfehler sind dabei korrigiert ("Finazanalysen",
 * "Günstere", "Zufridene").
 */

export const site = {
  name: "CIC-Global",
  founder: "Konstantinos Kougkas",
  url: "https://cic-global.de",
  street: "Johannes-Rau-Allee 3",
  postalCode: "45889",
  city: "Gelsenkirchen",
  phone: "+49 1768 4368 032",
  phoneHref: "+4917684368032",
  email: "kontakt@cic-global.de",
  hours: [
    { days: "Mo – Fr", time: "9:00 – 19:00 Uhr" },
    { days: "Sa + So", time: "12:00 – 17:00 Uhr" },
  ],
} as const;

export const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/blog", label: "Blog" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/**
 * Die Zeitachse — das Signature-Element. `horizon` ist keine Dekoration,
 * sondern sagt, ab wann die jeweilige Leistung beim Kunden ankommt.
 */
export type Service = {
  horizon: string;
  title: string;
  claim: string;
  body: string;
};

export const services: Service[] = [
  {
    horizon: "Tag 0",
    title: "Finanzanalyse",
    claim: "Zeigt, wo Sie stehen.",
    body: "Eine gründliche Finanzanalyse schafft Transparenz. Wir betrachten Ihre Einnahmen, Ausgaben und bestehenden Verträge, um ein klares Gesamtbild zu erstellen. Auf dieser Grundlage lassen sich Optimierungsmöglichkeiten erkennen und bessere finanzielle Entscheidungen treffen.",
  },
  {
    horizon: "Nächster Abschlag",
    title: "Strom & Gas",
    claim: "Wirkt sofort auf der Rechnung.",
    body: "Mit unseren Strom- und Gastarifen reduzieren Sie Ihre Energiekosten ohne zusätzlichen Aufwand. Der Anbieterwechsel läuft unkompliziert und die Versorgung bleibt jederzeit stabil und unterbrechungsfrei.",
  },
  {
    horizon: "Ab Tag 1",
    title: "Versicherungen",
    claim: "Schützt ab dem ersten Tag.",
    body: "Wir bieten Ihnen passende Versicherungslösungen zu attraktiven Konditionen und legen großen Wert auf eine zuverlässige Absicherung im Alltag. Auch im Schadenfall sind wir an Ihrer Seite und unterstützen Sie bei der kompletten Abwicklung.",
  },
  {
    horizon: "10+ Jahre",
    title: "Investments",
    claim: "Wächst mit jedem Jahr, das läuft.",
    body: "Investieren bedeutet, Geld gezielt für sich arbeiten zu lassen. Wir helfen Ihnen, passende Möglichkeiten zu finden, um Ihr Vermögen nachhaltig zu entwickeln. Dabei setzen wir auf klare Strategien und nachvollziehbare Entscheidungen, damit Sie jederzeit den Überblick behalten.",
  },
  {
    horizon: "30+ Jahre",
    title: "Altersvorsorge",
    claim: "Trägt später, was heute eingezahlt wird.",
    body: "Eine gute Altersvorsorge bedeutet finanzielle Sicherheit im Ruhestand. Wir unterstützen Sie dabei, frühzeitig die richtigen Entscheidungen zu treffen und eine stabile Basis aufzubauen — mit verständlichen Lösungen, die zu Ihrer Lebenssituation passen.",
  },
];

/**
 * Exklusivpartner aus dem Netzwerk. Namen als Text — für Logos fehlen die
 * Nutzungsrechte. `category` ist das öffentlich bekannte Geschäftsfeld des
 * jeweiligen Unternehmens, keine Behauptung über die konkrete Zusammenarbeit.
 */
export type Partner = { name: string; category: string };

export const partners: Partner[] = [
  { name: "Barmenia Gothaer", category: "Versicherungen" },
  { name: "ROLAND Rechtsschutz", category: "Rechtsschutz" },
  { name: "Vattenfall", category: "Energie" },
];

/**
 * Häufige Fragen. Antworten fassen nur zusammen, was an anderer Stelle auf
 * der Seite bereits belastbar steht (kostenlos & unverbindlich, Netzwerk,
 * Zielgruppen, Zeithorizonte) — keine neuen Zusagen zu Zulassung, Haftung
 * oder Ablauf, die eine rechtliche Prüfung bräuchten.
 */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Kostet das Erstgespräch etwas?",
    answer:
      "Nein. Das Erstgespräch ist kostenlos und unverbindlich. Sie erfahren, wo Sie stehen — ohne dass daraus eine Verpflichtung entsteht.",
  },
  {
    question: "Muss ich mich auf das Gespräch vorbereiten?",
    answer:
      "Nicht zwingend. Hilfreich sind bestehende Verträge und ein grober Überblick über Einnahmen und Ausgaben — den Rest ordnen wir gemeinsam in der Finanzanalyse.",
  },
  {
    question: "Bin ich danach zu etwas verpflichtet?",
    answer:
      "Nein. Sie entscheiden in Ruhe, ob und wie es weitergeht. Unser Ziel ist nicht, Produkte zu vermitteln, sondern eine Verbesserung, die sich für Sie rechnet.",
  },
  {
    question: "Arbeiten Sie nur mit Privatpersonen?",
    answer:
      "Nein. Wir beraten Privatpersonen ebenso wie Unternehmer — bei Unternehmen liegt die durchschnittliche Ersparnis bei rund 10.500 € im Jahr, bei gleichzeitig besserem Versicherungsschutz.",
  },
  {
    question: "Mit welchen Partnern arbeiten Sie zusammen?",
    answer:
      "Mit einem sorgfältig ausgewählten Netzwerk, darunter Barmenia Gothaer, ROLAND Rechtsschutz und Vattenfall. Das verschafft Ihnen Zugang zu einer breiten Auswahl statt zu einem einzelnen Anbieter.",
  },
  {
    question: "Ist das eine einmalige Beratung oder eine langfristige Begleitung?",
    answer:
      "Beides, je nach Bereich. Manches wirkt sofort — etwa ein Tarifwechsel bei Strom und Gas. Anderes, wie die Altersvorsorge, begleiten wir über Jahrzehnte.",
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  lead: string;
  readingTime: string;
  sections?: { heading: string; paragraphs: string[] }[];
  paragraphs?: string[];
};

export const articles: Article[] = [
  {
    slug: "finanzielle-planung-fuer-ihre-zukunft",
    title: "Finanzielle Planung für Ihre Zukunft",
    date: "2026-03-24",
    readingTime: "3 Min.",
    lead: "Eine gute Finanzplanung bedeutet mehr als nur sparen. Wir zeigen Ihnen, wie Sie mit einer klaren Strategie Vermögen aufbauen, Risiken absichern und langfristig finanziell erfolgreich planen.",
    sections: [
      {
        heading: "Die Kraft der Zeit",
        paragraphs: [
          "Viele Menschen unterschätzen einen entscheidenden Faktor beim Vermögensaufbau: Zeit. Wer früh beginnt, kann mit kleinen Schritten große Ergebnisse erreichen. Eine gute Planung nutzt genau diesen Vorteil — damit aus kleinen Entscheidungen heute große Möglichkeiten morgen entstehen.",
        ],
      },
      {
        heading: "Klarheit statt Zufall",
        paragraphs: [
          "Ohne Plan entstehen finanzielle Entscheidungen oft spontan. Mit einer klaren Strategie wird aus Unsicherheit Struktur. Sie wissen, wo Sie stehen, wohin Sie wollen und wie Sie dorthin kommen.",
        ],
      },
      {
        heading: "Basierend auf einer wahren Begebenheit",
        paragraphs: [
          "Alles fing mit einem Gedanken an, den viele kennen: „Dafür ist später noch Zeit.“ Ein sicherer Job, ein regelmäßiges Einkommen — es schien keinen wirklichen Grund zu geben, sich intensiv mit der eigenen finanziellen Zukunft zu beschäftigen.",
          "Jeden Tag lief der Alltag weiter. Arbeiten, leben, ein bisschen sparen. Der Gedanke an eine klare Finanzstrategie tauchte zwar gelegentlich auf, wurde aber immer wieder auf später verschoben.",
          "Eines Tages wurde ihm bewusst, wie schnell die Zeit vergangen war. Einige Chancen zum Vermögensaufbau hätte man früher deutlich einfacher nutzen können — und genau das ließ ihn seine Entscheidungen überdenken.",
          "Deshalb begann er, sich ernsthaft mit seiner finanziellen Zukunft zu beschäftigen und eine klare Struktur in seine Finanzen zu bringen. Er entschied sich, seine Planung nicht länger aufzuschieben, sondern bewusst zu handeln.",
          "Bis schließlich aus dem Gedanken „Ich sollte mich irgendwann darum kümmern“ ein klarer Plan für seine Zukunft wurde.",
        ],
      },
    ],
  },
  {
    slug: "frueh-starten-langfristig-profitieren",
    title: "Früh starten – langfristig profitieren",
    date: "2026-03-17",
    readingTime: "2 Min.",
    lead: "Je früher man beginnt, sich mit seinen Finanzen zu beschäftigen, desto größer sind die Möglichkeiten.",
    paragraphs: [
      "Je früher man beginnt, sich mit seinen Finanzen zu beschäftigen, desto größer sind die Möglichkeiten. Ein strukturierter Vermögensaufbau während des Studiums schafft nicht nur finanzielle Sicherheit, sondern auch wichtige Erfahrungen im Umgang mit Geld und Investitionen.",
      "Viele erfolgreiche Investoren betonen, dass der wichtigste Faktor beim Vermögensaufbau nicht die Höhe des Startkapitals ist, sondern der frühe Einstieg und eine langfristige Strategie.",
    ],
  },
  {
    slug: "absicherung-fuer-familien",
    title: "Absicherung für Familien",
    date: "2026-03-10",
    readingTime: "2 Min.",
    lead: "Wenn Verantwortung wächst, wird finanzielle Sicherheit noch wichtiger.",
    paragraphs: [
      "Wenn Verantwortung wächst, wird finanzielle Sicherheit noch wichtiger. Erfahren Sie, wie Sie Ihre Familie zuverlässig absichern und gleichzeitig eine stabile finanzielle Zukunft für sich und Ihre Kinder aufbauen.",
    ],
  },
  {
    slug: "selbststaendig-so-sichern-sie-sich-richtig-ab",
    title: "Selbstständig? So sichern Sie sich richtig ab",
    date: "2026-03-03",
    readingTime: "2 Min.",
    lead: "Selbstständigkeit bedeutet Freiheit – aber auch Verantwortung für die eigene finanzielle Sicherheit.",
    paragraphs: [
      "Selbstständigkeit bedeutet Freiheit — aber auch Verantwortung für die eigene finanzielle Sicherheit. Erfahren Sie, welche Versicherungen und Strategien für Unternehmer und Selbstständige besonders wichtig sind.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
