import { LegalStub } from "@/components/LegalStub";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von CIC-Global, Gelsenkirchen.",
  path: "/impressum",
});

export default function Impressum() {
  return (
    <LegalStub
      title="Impressum"
      intro="Anbieterkennzeichnung nach §5 DDG sowie Pflichtangaben für Versicherungs- und Finanzanlagenvermittler."
      missing={[
        "Rechtsform und vertretungsberechtigte Person",
        "Registergericht und Handelsregisternummer, sofern eingetragen",
        "Umsatzsteuer-Identifikationsnummer oder Hinweis auf die Kleinunternehmerregelung",
        "Erlaubnis nach §34d GewO (Versicherungsvermittlung) und/oder §34f GewO (Finanzanlagenvermittlung), inklusive erteilender IHK",
        "Registrierungsnummer im Vermittlerregister (vermittlerregister.info)",
        "Statusbezeichnung: gebundener Vertreter, Makler oder Mehrfachagent — mit den vertretenen Gesellschaften",
        "Berufshaftpflichtversicherung: Versicherer und räumlicher Geltungsbereich",
        "Zuständige Schlichtungsstelle (Versicherungsombudsmann e.V. bzw. Ombudsmann für Investmentfonds)",
      ]}
    />
  );
}
