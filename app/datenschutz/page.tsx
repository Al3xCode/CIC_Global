import { LegalStub } from "@/components/LegalStub";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von CIC-Global, Gelsenkirchen.",
  path: "/datenschutz",
});

export default function Datenschutz() {
  return (
    <LegalStub
      title="Datenschutzerklärung"
      intro="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO."
      missing={[
        "Verantwortliche Stelle und Kontaktdaten",
        "Datenschutzbeauftragter, sofern benannt",
        "Verarbeitung der Kontaktformulardaten: Zweck, Rechtsgrundlage und Speicherdauer",
        "Newsletter-Versand: eingesetzter Dienstleister und Double-Opt-in-Verfahren",
        "Hosting und Server-Logfiles",
        "Eingesetzte Analyse- und Trackingdienste, sofern vorhanden",
        "Betroffenenrechte und zuständige Aufsichtsbehörde",
      ]}
    />
  );
}
