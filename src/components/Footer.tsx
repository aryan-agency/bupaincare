import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t-2 border-border py-8 px-4 bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-muted-foreground font-body">
      <img src={logo} alt="BU PainCare Clinic" className="h-10 w-auto" />
      <div className="flex flex-col items-center md:items-end gap-2">
  <span className="font-medium">
    © {new Date().getFullYear()} BU PainCare Clinic. All rights reserved.
  </span>

  <div className="text-sm text-white/60">
    Built by{" "}
    <a
      href="https://aryansrivastav.in"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-cyan-400 transition-colors"
    >
      Aryan Srivastav
    </a>
    {" "}—{" "}
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
