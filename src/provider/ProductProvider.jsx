import { ProductContext } from "../context";
import { useProduct } from "../hooks";

const ProductProvider = ({ children }) => {
  const {
    productData,
    error,
    loading,
    categories,
    setSelectedCategories,
    selectedCategories,
  } = useProduct();
  return (
    <ProductContext.Provider
      value={{
        productData,
        error,
        loading,
        categories,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
