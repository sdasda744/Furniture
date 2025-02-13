import { Link } from "react-router-dom";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Icons } from "../icons/Icon";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const ProductCard = ({ product, className }: ProductProps) => {
  return (
    <Card className={cn("size-full rounded-lg overflow-hidden", className)}>
      <Link to={`/products/${product.id}`}>
        <AspectRatio ratio={1 / 1}>
          <img
            src={product.images[0]}
            alt=""
            className="size-full object-cover"
          />
        </AspectRatio>
        <CardContent className="py-3">
          <CardTitle className="mb-1.5">{product.name}</CardTitle>
          <CardDescription>{formatPrice(product.price)}</CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="w-full">
        {product.status === "sold" ? (
          <Button
            variant="default"
            className="w-full font-bold"
            disabled={true}
          >
            Sold
          </Button>
        ) : (
          <Button className="w-full bg-own font-bold dark:bg-darkOwn text-slate-200 dark:text-slate-200">
            <Icons.plus />
            Add To Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
