import { Link } from "react-router-dom";
import { MainNavItem } from "@/types";
import { Icons } from "@/components/icons/Icon";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

interface MainNavigationProps {
  items?: MainNavItem[];
}

const MobileNavigation = ({ items }: MainNavigationProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleOnChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleOnChange);
    return () => mediaQuery.removeEventListener("change", handleOnChange);
  }, []);
  
  if (isDesktop) {
    return null;
  }

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-6">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetClose asChild>
            <Link to="/" className="flex items-center gap-2 mt-4">
              <Icons.logo className="size-6" />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold">
                  {items?.[0].title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1.5">
                    {items?.[0]?.card &&
                      items[0].card.map((item) => (
                        <SheetClose
                          asChild
                          key={item.title}
                          className="ml-2 text-foreground/70"
                        >
                          <Link to={String(item.href)}>{item.title}</Link>
                        </SheetClose>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-2 mt-2">
              {items?.[0]?.menu &&
                items[0].menu.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link to={String(item.href)}>{item.title}</Link>
                  </SheetClose>
                ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
