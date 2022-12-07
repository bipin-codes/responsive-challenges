import React from "react";
import { ProductCard } from "./styles";

export type ProductType = { category: string; img: string; name: string };

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <ProductCard>
      <img src={`/images/eddie/${product.img}`} alt={"product_img"} />
      <p>{product.category}</p>
      <p>{product.name}</p>
    </ProductCard>
  );
};

export default Product;
