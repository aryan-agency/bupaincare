const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
      <span className="font-display text-foreground font-semibold text-gold-gradient">BU PainCare Clinic</span>
      <span>© {new Date().getFullYear()} BU PainCare Clinic. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
