import { site } from "@/lib/site";

/**
 * Fester Kontakt-Button unten rechts, auf jeder Seite sichtbar. Nutzt die
 * offizielle WhatsApp-Grünfarbe statt der Marken-Palette — das ist bewusst
 * ein Fremdkörper, der als eigener Kanal sofort erkennbar sein soll, statt
 * sich ins Gold/Beige einzufügen.
 */
const digits = site.phoneHref.replace(/\D/g, "");
const prefill = encodeURIComponent(`Hallo ${site.name}, ich habe eine Frage.`);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${digits}?text=${prefill}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Über WhatsApp kontaktieren"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg aria-hidden viewBox="0 0 32 32" width={28} height={28} fill="currentColor">
        <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.3.64 4.45 1.75 6.29L3 29l7.9-2.07a12.9 12.9 0 0 0 5.11 1.04h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.64 3 16.01 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.46 4.44-9.9 9.9-9.9 5.45 0 9.88 4.44 9.88 9.9s-4.44 9.9-9.9 9.9Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
