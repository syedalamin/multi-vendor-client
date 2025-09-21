import MainProduct from "@/_components/Main/UI/Product/MainProduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "...",
};

const ProductPage = () => {
  return (
    <MainProduct/>
  );
};

export default ProductPage;
