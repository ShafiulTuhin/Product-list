import { ProductContext } from "../context";
import { useProduct } from "../hooks";

const ProductProvider = ({ children }) => {
  const { productData, error, loading, categories, setSelectedCategories } =
    useProduct();
  return (
    <ProductContext.Provider
      value={{
        productData,
        error,
        loading,
        categories,
        setSelectedCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
