import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import { Link } from "react-router-dom";

interface ProductsProps {
  products: Product[];
}

export default function CarouselCard({ products }: ProductsProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="container mx-auto py-20"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="lg:basis-1/3">
            <div className="flex gap-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-28 rounded-md"
              />
              <div className="flex flex-col">
                <h4 className="font-bold mb-1.5">{product.name}</h4>
                <p className="text-sm text-foreground/70 line-clamp-2 mb-1">
                  {product.description}...
                </p>
                <Link to="#" className="text-own text-sm dark:text-darkOwn">
                  Read More
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="mr-4" />
      <CarouselPrevious className="ml-4" />
    </Carousel>
  );
}
