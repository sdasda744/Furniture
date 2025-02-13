import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";
import Container from "./Container";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center justify-between">
        <nav className="flex justify-between items-center h-16">
          <MainNavigation items={siteConfig.mainNav} />
          <MobileNavigation items={siteConfig.mainNav} />
        </nav>
        <div className=" lg:mr-0">
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;
