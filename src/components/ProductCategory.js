import ProductCard from "./ProductCard";
const ProductCategory = ({ title, products }) => {
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };
  export default ProductCategory;