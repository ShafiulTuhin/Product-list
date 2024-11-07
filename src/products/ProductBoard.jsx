import { useContext } from "react";
import Category from "./Category";
import ProductCart from "./ProductCart";
import ProductsDetails from "./ProductsDetails";
import Search from "./Search";
import Sort from "./Sort";
import { ProductContext } from "../context";

const ProductBoard = () => {
  const { productData } = useContext(ProductContext);
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <Sort />
              <Category />
            </div>

            <div className="flex gap-2 items-center">
              <Search />
              <ProductCart />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productData.map((product) => (
                  <ProductsDetails product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBoard;
