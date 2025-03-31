'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function UserCenterPage() {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    const handlePayment = async () => {
        setLoading(true);
        setResponse(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
                },
                // This
                body: JSON.stringify({
                    cardNumber: '4242424242424242',
                    cvv: '123',
                    expiryDate: '12/25',
                    cardHolderName: 'Jane Catlover',
                    amount: 20,
                }),
            });

            const data = await res.json();
            setResponse('Payment processed successfully!');
        } catch (error) {
            setResponse(`Payment Failed, Please try agian later.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-20 px-4">
            <Navbar />

            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800">User Center</h1>
                <p className="mt-2 text-gray-600">
                    Welcome to your user center. Here is your code challenge for CSC309 Week 12.
                </p>
            </div>

            <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Pay Now</h2>
                <img
                    src="/images/20.jpg"
                    alt="Auctioned Cat"
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                {/* <p className="text-gray-700 mb-2">Fluffy Maine Coon</p> */}
                <p className="text-gray-900 font-bold mb-4">$20</p>

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>

                {response && (
                    <pre className="mt-6 p-4 bg-gray-100 text-left text-sm overflow-x-auto rounded text-black">
                        {response}
                    </pre>
                )}
            </div>
        </main>
    );
}