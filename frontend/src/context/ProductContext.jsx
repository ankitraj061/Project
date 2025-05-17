import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductContextWrapper = ({ children }) => {
  const [products, setProducts] = useState([]);

  console.log("products in cart", products);

  useEffect(() => {
    let sum = 0;
    products.forEach((pr) => {
      if (pr.price && typeof pr.price === "string" && pr.price.includes("₹")) {
        sum += Number(pr.price.split("₹")[1]);
      }
    });
    console.log("total sum price in cart is", sum);
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
  };

  const updateQuantity = (id, type) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                type === "increment"
                  ? product.quantity + 1
                  : product.quantity - 1,
            }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ProductContext);
};

export default ProductContextWrapper;