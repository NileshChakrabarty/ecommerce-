import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutForm.module.css'; // Ensure your loader styles are in this CSS module

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'credit_card',
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(field => field.trim() !== '');
    
    if (!isFormValid) {
      alert('Please fill in all fields.');
      return;
    }

    handlepay();
  };

  const handlepay = () => {
    setLoading(true); // Start loading

    // Simulate a loading period
    setTimeout(() => {
      alert('Payment processed successfully');
      setLoading(false); // Stop loading
      // Reset form state
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        paymentMethod: 'credit_card',
      });
      navigate("/");
    }, 3000); // 3 seconds delay
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Checkout</h2>

      {loading && (
        <div className="flex justify-center mb-4">
          <div className={styles.loader}></div> {/* Loader */}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Fields Here... */}
        {/* Keep your form fields as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        {/* Address Information */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={formData.paymentMethod === 'credit_card'}
                onChange={handleChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={handleChange}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* Confirm and Pay Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Confirm and Pay
        </button>
      </form>
    </div>
  );
}
