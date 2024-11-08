import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  //Fetching All Products:
  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching all products...",
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
  //Fetching Categories:
  const fetchCategories = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Categories...",
      });
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        const errorMessage = `Fetching Category  failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "Fetching Category...",
      });
    }
  };
  //Fetching product by categories:
  const fetchProductWithCategory = async (category) => {
    try {
      const response = await fetch(
        `'https://fakestoreapi.com/products/${category}`
      );
      if (!response.ok) {
        const errorMessage = `Fetching Category product failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      setProductData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "Fetching Product by Category...",
      });
    }
  };

  //Fetching intial loading:
  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Fetching Products Category...",
    });

    fetchCategories();
    fetchProductData();
  }, []);

  //Fetching on selected Categories
  useEffect(() => {
    if (selectedCategories) {
      fetchProductWithCategory(selectedCategories);
    } else {
      fetchProductData();
    }
  }, [selectedCategories]);

  return {
    productData,
    error,
    loading,
    categories,
    setSelectedCategories,
  };
};

export default useProduct;
