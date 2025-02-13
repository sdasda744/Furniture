import { Link } from "react-router-dom";
import { Icons } from "../icons/Icon";
import { siteConfig } from "@/config/site";
import NewsLetterForm from "../NewsLetterForm";
import Container from './Container';

const Footer = () => {
  return (
    <footer className="border-t">
      <Container className="pt-5 pb-4">
        <section className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-20 ">
          <section>
            <Link to="/" className="flex items-center gap-3">
              <Icons.logo className="size-6" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid gap-12 grid-cols-2 md:grid-cols-4">
            {siteConfig.footerNav.map((footer) => (
              <div key={footer.title} className="space-y-3">
                <h4 className="font-semibold text-nowrap">{footer.title}</h4>
                <ul className="text-inherit">
                  {footer.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                        className="text-foreground/70 hover:text-foreground duration-200 text-sm"
                      >
                        {item.title}
                      </Link>
                      <span className="sr-only">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="space-y-3">
            <h4 className="font-bold text-nowrap">
              Subscribe to our newsletter
            </h4>
            <NewsLetterForm />
          </section>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
