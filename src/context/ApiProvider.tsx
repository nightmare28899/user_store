import { createContext, useState } from "react";
import { environment } from "../environments/environment";
import { Product } from "../interfaces/products";
import { Category } from "../interfaces/categories";
import axios from "axios";

const ApiContext = createContext({});

interface props {
  children?: JSX.Element | JSX.Element[];
}

export function ApiProvider({ children }: props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const baseApiUrl = environment.baseApiUrl;

  const getCategories = async () => {
    try {
      await axios.get(`${baseApiUrl}/categories`).then((response) => {
        setCategories(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      await axios.get(`${baseApiUrl}/products`).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        categories,
        setCategories,
        getCategories,
        products,
        setProducts,
        getProducts,
        baseApiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContext;
