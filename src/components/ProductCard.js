import { useState } from "react";
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from'react-router-dom';
const backendUrl = "https://ainaz-backend.onrender.com" || "http://localhost:5001"
// const backendUrl = "http://localhost:5001"





const ProductCard = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const {loginState, setLoginState} = useAuth()
  const navigate = useNavigate();

  const handelCart = async (product) => {
    if (!loginState){
        alert("You are not logged in! Please log in to add products to your cart.")
        navigate("/SignUp")
        return
    }
    setIsAdding(true);
    
    try {
        const productWithQuantity = {
            ...product,
            quantity: 1,
            price: parseFloat(product.price.replace('$', '')).toFixed(2)
        };
      const response = await fetch(`${backendUrl}/api/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify([productWithQuantity]),// Send the product data as an array
      });

    //   console.log(response)


      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }
      const data = await response.json();
      console.log(data);
      console.log("Product added to cart successfully:", data);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Error adding product to cart. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-red-500 text-sm mb-2">{product.description}</p>
      <p className="text-xl font-bold mb-2">${product.price}</p>
      <button
        onClick={() => handelCart(product)}
        className={`bg-black text-white px-4 py-2 mr-20 rounded hover:bg-red-500 transition ${
          isAdding ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
      {/* <button className="bg-black text-white px-4 py-2  rounded hover:bg-red-500 transition">
        Wishlist
      </button> */}
    </div>
  );
};

export default ProductCard;
