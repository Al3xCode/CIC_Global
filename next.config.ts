import type { NextConfig } from "next";

/**
 * Die Alt-Seite lief auf einem Website-Builder mit Slugs ohne Umlaut-
 * Transliteration. Die Redirects halten vorhandene Rankings am Leben.
 */
const legacySlugs: Array<[string, string]> = [
  ["/uber-uns", "/ueber-uns"],
  ["/fruh-starten-langfristig-profitieren", "/blog/frueh-starten-langfristig-profitieren"],
  ["/selbststandig-so-sichern-sie-sich-richtig-ab", "/blog/selbststaendig-so-sichern-sie-sich-richtig-ab"],
  ["/absicherung-fur-familien", "/blog/absicherung-fuer-familien"],
  ["/finanzielle-planung-fur-ihre-zukunft", "/blog/finanzielle-planung-fuer-ihre-zukunft"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacySlugs.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
