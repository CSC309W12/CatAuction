'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">🐾 CatAuction</h2>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} CatAuction. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
