import { Icons } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/products/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import ProductRating from "@/components/products/ProductRating";
import { useEffect } from "react";
import AddToFavorite from "@/components/products/AddToFavorite";
import AddToCart from "@/components/products/AddToCart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetails = () => {
  const { productId } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, [productId]);

  const product = products.find((product) => product.id === productId);
  return (
    <>
      <section>
        <Button asChild variant="outline" className="mt-5 mb-10">
          <Link to="/products">
            <Icons.arrowLeft />
            All Products
          </Link>
        </Button>
        <section className="flex flex-col gap-10 md:flex-row justify-between">
          <section className="w-full md:w-1/2">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {product?.images.map((image) => (
                  <CarouselItem key={image}>
                    <img
                      src={image}
                      className="size-full object-cover xl:h-[500px] rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
          <Separator className="mt-4  md:hidden" />
          <section className="w-full md:w-1/2">
            <div className="flex flex-col">
              <div className="space-y-1">
                <h4 className="text-xl font-medium leading-none">
                  {product?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(Number(product?.price))}
                </p>
              </div>
              <Separator className="my-6" />
              <div className="flex justify-between">
                <div className="space-y-2.5">
                  {product?.inventory !== 0 ? (
                    <div className="">{product?.inventory} in stock</div>
                  ) : (
                    <div className="">Sorry there is no stock</div>
                  )}

                  <ProductRating rating={Number(product?.rating)} />
                  <AddToCart />
                </div>
                <AddToFavorite
                  product={String(product?.id)}
                  rating={Number(product?.rating)}
                  className={"mt-1.5"}
                />
              </div>
              <Separator className="my-8" />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Descriptions</AccordionTrigger>
                  <AccordionContent>
                    {product?.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </section>
      </section>
      <section>
        <h2 className="mt-14 mb-8 text-2xl font-bold">
          More products from furniture shop
        </h2>
        <ScrollArea className="">
          <div className="flex gap-6">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                className="min-w-[270px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </>
  );
};

export default ProductDetails;
