import { Icons } from "@/components/icons/Icon";

interface rateProps {
  rating: number;
}

const ProductRating = ({rating}: rateProps) => {
  const currentStar = Array.from({length : 5}, (_, i) => i + 1);
  return (
    <div className="flex gap-1.5">
      {currentStar.map(star => (
        <Icons.star key={star} className={`size-5 ${star < rating ? "text-yellow-500" : "text-muted-foreground"}`}/>
      ))}
    </div>   
  )
}

export default ProductRating