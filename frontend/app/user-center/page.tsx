// app/user-center/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function UserCenterPage() {
  // Handler function that calls the payment API
  const handlePayment = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Here you can modify the content to be retrieved from the database; 
        // the code provided is just to simplify things.
        body: JSON.stringify({
          cardNumber: '4242424242424242',
          cvv: '123',
          expiryDate: '12/25',
          cardHolderName: 'John Doe',
          amount: 20
        })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Payment Successful');
      } else {
        alert('Payment Failed: ' + data.error);
      }
    } catch (error) {
      console.error('Error processing payment', error);
      alert('Payment error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">User Center</h1>
        <p className="mt-4 text-white text-center">
          Welcome to your user center. Here is your code challenge for CSC309 Week 12.
        </p>

        {/* Pay Card */}
        <div className="mt-8 p-4 bg-white rounded shadow-md w-80">
          {/* Product Image */}
          <img
            src="/images/banner/banner.JPEG"
            alt="Product"
            className="w-full h-40 object-cover rounded"
          />
          <div className="mt-4">
            {/* Product Price */}
            <p className="text-gray-700 font-bold text-lg">$20.00</p>
            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Pay Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
