import { useContext, useState } from "react";
import Category from "./Category";
import ProductCart from "./ProductCart";
import ProductsDetails from "./ProductsDetails";
import Search from "./Search";
import Sort from "./Sort";
import { ProductContext } from "../context";
import { useDebounce } from "../hooks";

import { toast } from "react-toastify";

const ProductBoard = () => {
  const { productData, selectedCategories } = useContext(ProductContext);
  const [showSort, setShowSort] = useState(false);
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [searchItem, setSearchItem] = useState("");

  //Implementing products for price-sort,category-filter and search:
  const filterProduct = productData
    .filter((product) =>
      selectedCategories?.length
        ? selectedCategories?.includes(
            `https://fakestoreapi.com/products/category/${product.category}`
          )
        : true
    )
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchItem?.toLowerCase()) ||
        product.category.toLowerCase().includes(searchItem?.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price
    );

  //Sorting function by Price for product
  const handlePriceSort = (order) => {
    setSortOrder(order);
    toast.success(`Sorted price by ${order}.`, {
      position: "top-center",
    });
    setShowSort(false);
  };

  //Searching function for product
  const doSearch = useDebounce((item) => {
    setSearchItem(item);
  }, 1000);

  const handleSearch = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

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
              <Sort
                onSort={handlePriceSort}
                showSort={showSort}
                setShowSort={setShowSort}
              />
              <Category />
            </div>

            <div className="flex gap-2 items-center">
              <Search onSearch={handleSearch} />
              <ProductCart />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {filterProduct.map((product) => (
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
