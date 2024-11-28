import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook


const backendUrl = "https://ainaz-backend.onrender.com" || "http://localhost:5001";
// const backendUrl =  "http://localhost:5001";


export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/cart`);
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.error("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleQuantity = async (id, action) => {
    try {
      // Send request to backend to update the quantity
      const response = await fetch(`${backendUrl}/api/cart/update-quantity`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, action }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Quantity updated:', data); // Optional: check the response
  
        // Update cart items locally if the backend request is successful
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    action === 'increment'
                      ? item.quantity + 1
                      : item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                }
              : item
          )
        );
      } else {
        console.error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error during quantity update:', error);
    }
  };



  const handleRemove = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/cart/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/checkout`, {
        method: 'POST',
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Checkout data:', data); // Optional: check the returned data
        setCartItems([]); // Clear the cart on the frontend
        navigate('/checkout'); // Navigate to the checkout page
      } else {
        console.error('Failed to complete checkout');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantity(item.id, "decrement")}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantity(item.id, "increment")}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(calculateTotal() + 10).toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
            onClick={handleCheckout}
            disabled={loading}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

