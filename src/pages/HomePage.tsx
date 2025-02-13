import { Link } from "react-router-dom";
import BlogCard from "@/components/blogs/BlogCard";
import CarouselCard from "@/components/products/CarouselCard";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import ProductCard from "@/components/products/ProductCard";

const blogPostLimit = posts.slice(0, 3);
const sampleProductPost = products.slice(0, 4);

const HomePage = () => {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="flex flex-col pt-8 pb-6 lg:mx-2 md:ml-1 md:flex-row justify-between">
      <h2 className="font-bold text-lg mb-1.5">{title}</h2>
      <Link
        to={href}
        className="text-muted-foreground text-sm md:text-base underline"
      >
        {sideText}
      </Link>
    </div>
  );
  return (
    // home page hero section
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-4 md:pt-12">
        <div className="w-full lg:w-3/5 mt-4 space-y-4 lg:space-y-6">
          <h1 className="text-4xl text-center  lg:text-left text-own dark:text-darkOwn md:text-5xl  lg:text-7xl font-extrabold">
            <span className="block mb-2.5 text-nowrap">Modern Interior </span>
            <span className="block">Design Studio</span>
          </h1>
          <p className="text-own text-center text-sm md:text-base lg:text-left dark:text-darkOwn">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="flex items-center justify-center lg:justify-start  gap-3 ">
            <Button
              asChild
              className="bg-orange-300 py-6 px-8 rounded-3xl font-bold"
            >
              <Link className="" to="#">
                Shop Now
              </Link>
            </Button>
            <Button
              variant={"outline"}
              asChild
              className="py-6 px-8 rounded-3xl font-bold"
            >
              <Link to="#">Explorer</Link>
            </Button>
          </div>
        </div>
        <img src={Couch} alt="" className="w-full lg:w-2/5" />
      </div>
      <CarouselCard products={products} />
      <Title
        title="Feature Products"
        href="products"
        sideText="View All Products"
      />
      <div className="grid grid-col-1 gap-6 md:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {sampleProductPost.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <Title title="Recent Blog" href="blogs" sideText="View All Posts" />
      <BlogCard posts={blogPostLimit} />
    </>
  );
};

export default HomePage;
