export type Product = {
  id: number;
  user_id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
  stock: number;
  image: string;
};

export type ProductContextType = {
  products: Array<Product>;
  setProducts: (value: Array<Product>) => void;
  getProducts: () => void;
  baseApiUrl: string;
};
