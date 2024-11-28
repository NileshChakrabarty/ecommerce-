import React from "react";
import n5 from "../assets/n5.jpg"
import f1 from "../assets/f1.jpg"
import Cart from "./Cart";
import ProductCategory from "./ProductCategory";

const products = {
  latest: [
    {
      name: "Product 1",
      price: "$50",
      image: n5,
      description: "New Arrival",
    },
    {
      name: "Product 2",
      price: "$75",
      image: f1,
      description: "New Arrival",
    },
    {
        name: "Product 1",
        price: "$50",
        image: n5,
        description: "New Arrival",
      },
      {
        name: "Product 2",
        price: "$75",
        image: f1,
        description: "New Arrival",
      }
  ],
  bestSellers: [
    {
      name: "Product 3",
      price: "$120",
      image: n5,
      description: "Best Seller",
    },
    {
      name: "Product 4",
      price: "$90",
      image: f1,
      description: "Best Seller",
    },
    {
        name: "Product 3",
        price: "$120",
        image: n5,
        description: "Best Seller",
      },
      {
        name: "Product 4",
        price: "$90",
        image: f1,
        description: "Best Seller",
      }
  ],
  onSale: [
    {
      name: "Product 5",
      price: "$45",
      image: f1,
      description: "On Sale",
    },
    {
      name: "Product 6",
      price: "$60",
      image: n5,
      description: "On Sale",
    },
    {
        name: "Product 5",
        price: "$45",
        image: f1,
        description: "On Sale",
      },
      {
        name: "Product 6",
        price: "$60",
        image: f1,
        description: "On Sale",
      }
  ],
};

const ProductShowcase = () => {
  return (
    <div className="container mx-auto px-4">
      <ProductCategory title="Latest Products" products={products.latest} />
      <ProductCategory title="Best Sellers" products={products.bestSellers} />
      <ProductCategory id = "#123" title="On Sale" products={products.onSale} />
    </div>
  );
};

export default ProductShowcase;
