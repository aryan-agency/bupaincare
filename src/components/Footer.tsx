import { CALL_URL, PHONE_DISPLAY, CLINIC_ADDRESS } from "@/lib/constants";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t-2 border-border py-8 px-4 bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-muted-foreground font-body">
      <img src={logo} alt="BU Pain Care Clinic" className="h-10 w-auto" />

      <div className="flex flex-col items-center md:items-end gap-2">
        <span className="font-medium">
          © {new Date().getFullYear()} BU Pain Care Clinic. All rights reserved.
        </span>

        <address className="not-italic text-sm text-center md:text-right max-w-xl">{CLINIC_ADDRESS}<br /><a href={CALL_URL}>{PHONE_DISPLAY}</a></address>
        <a href="/blog/bu-pain-care-clinic-bali-nagar-delhi-new-address/" className="text-primary underline">Updated clinic address and contact number</a>

        <div className="text-sm text-white/60">
          Built by{" "}
          <a
            href="https://aryansrivastav.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-400 transition-colors"
          >
            Aryan Srivastav
          </a>{" "}
          —{" "}
          <a
            href="https://theariseai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-400 transition-colors"
          >
            Arise AI
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
