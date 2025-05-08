"use server";
import Products from "./function/Products";
import product, { getProducts } from "./function/getProducts";
const ProductsContainer = async () => {
  const products: product[] = await getProducts();
  return (
    <section className="relative w-full flex justify-center items-center">
      <Products products={products} />
    </section>
  );
};

export default ProductsContainer;
