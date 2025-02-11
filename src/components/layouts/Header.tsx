import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b fixed top-0 z-50 bg-background">
      <nav className="container flex justify-between items-center h-16 mx-auto">
        <div className="">
          <MainNavigation items={siteConfig.mainNav} />
          <MobileNavigation items={siteConfig.mainNav} />
        </div>
        <div className="mr-4 lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
