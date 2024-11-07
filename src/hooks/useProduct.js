import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Product Data...",
      });
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        const errorMessage = `Fetching Product data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      setProductData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "Fetching Product Data...",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding Products...",
    });

    fetchProductData();
  }, []);

  return { productData, error, loading };
};

export default useProduct;
