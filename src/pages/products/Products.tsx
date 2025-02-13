import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import ProductPagination from "@/components/products/ProductPagination";
import { products, filterList } from "@/data/products";
import Container from "@/components/layouts/Container";

const Products = () => {
  return (
    <section className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
      <section className="w-1/5">
        <ProductFilter filterData={filterList} />
      </section>
      <section className="w-full lg:w-4/5">
        <h1 className="font-bold text-lg ">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-6 lg:my-12">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <ProductPagination />
      </section>
    </section>
  );
};

export default Products;
