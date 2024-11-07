import { ProductContext } from "../context";
import { useProduct } from "../hooks";

const ProductProvider = ({ children }) => {
  const { productData, error, loading } = useProduct();
  return (
    <ProductContext.Provider value={{ productData, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
