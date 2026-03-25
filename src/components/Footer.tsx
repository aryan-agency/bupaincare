import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t-2 border-border py-8 px-4 bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-muted-foreground font-body">
      <img src={logo} alt="BU PainCare Clinic" className="h-10 w-auto" />
      <span className="font-medium">© {new Date().getFullYear()} BU PainCare Clinic. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
