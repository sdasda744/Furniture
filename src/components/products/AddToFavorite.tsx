import { Icons } from "../icons/Icon";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FavoriteProps {
  product: string;
  rating: number;
  className?: string;
}

const AddToFavorite = ({
  // product,
  // rating,
  className,
  ...props
}: FavoriteProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("size-8 shrink-0 ", className)}
      {...props}
    >
      <Icons.heart className="size-3" />
    </Button>
  );
};

export default AddToFavorite;
