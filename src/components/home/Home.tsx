import { useContext, useEffect } from "react";
import ApiProvider from "../../context/ApiProvider";
import { ProductContextType } from "../../interfaces/products";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import "./home.css";

export default function Home() {
  const { products, getProducts } = useContext(
    ApiProvider
  ) as ProductContextType;

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <>
      <section className="bg-gray-100 p-8 mt-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                className="bg-white shadow-lg rounded-lg px-4 py-6 text-center"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  className="mx-auto mb-4"
                />
                <div className="text-gray-500 mb-2 flex justify-center">
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </div>
                <h3 className="text-lg text-gray-700 font-semibold">
                  {product.name}
                </h3>
                <div className="text-gray-500 mb-2">$ {product.price}</div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
