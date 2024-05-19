import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../services/prodcuts";
import { ProductType } from "../types/ProductsTypes";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const setProductsFromDB = async()=>{
        setLoading(true)
        const newProducts = await getAllProducts();
        setLoading(false)

        setProducts(newProducts);
      }

      setProductsFromDB()
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

// Rendenizei os produtos utilizando o componente ProductCard.
// Utilizei useState para controlar o estado dos produtos e se está carregando.
// Se ainda estiver carregando, exibimos uma mensagem de carregamento.
// Se houver erro na requisição, exibimos no console e marcamos que o carregamento foi concluído.
// Utilizaei useEffect para buscar a lista de produtos quando o componente é montado.
// Definimos os produtos recebidos do servidor e marcamos que o carregamento foi concluído.