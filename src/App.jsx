import Footer from "./Footer";
import Header from "./Header";

import ProductCollections from "./ProductCollections";
import ProductBoard from "./products/ProductBoard";
import ProductProvider from "./provider/ProductProvider";
import CartProvider from "./provider/CartProvider";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <ProductCollections />
        <ProductBoard />
        <Footer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;