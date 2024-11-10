import { useContext, useState } from "react";
import { ProductContext } from "../context";

const Category = () => {
  const { categories, selectedCategories, setSelectedCategories } =
    useContext(ProductContext);
  const [showCatModal, setShowCatModal] = useState(false);

  // console.log(selectedCategories);

  // const filterCategory = productData.filter(
  //   (product) =>
  //     product.category ===
  //     categories.filter(
  //       (cat) => `https://fakestoreapi.com/products/category/${cat}`
  //     )
  // );
  // console.log(filterCategory);

  // const filterCategory = productData.filter((t) =>
  //   selectedCategories?.length ? selectedCategories?.includes(t.category) : true
  // );

  // console.log(filterCategory);
  // const fetchedCategory = (category) => {
  //   setSelectedCategories(category);
  //   console.log(category);
  // };

  const handleCategoryChange = (category) => {
    if (selectedCategories?.includes(category)) {
      setSelectedCategories(null);
    } else {
      setSelectedCategories(category);
    }
    console.log(category);
    setShowCatModal(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setShowCatModal(!showCatModal)}
        >
          Filter
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showCatModal && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {categories.map((category) => (
              <label
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                key={category}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  // value={(e) => e.target.checked}
                  checked={selectedCategories?.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
