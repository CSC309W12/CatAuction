'use client';

import Image from 'next/image';
import Link from 'next/link';

const mockAuctions = [
  {
    id: 1,
    title: 'Fluffy Maine Coon',
    description: 'A majestic Maine Coon ready for a new home.',
    imageUrl: '/images/20.jpg',
  },
  {
    id: 2,
    title: 'Playful Siamese',
    description: 'Smart and vocal, looking for a chatty companion!',
    imageUrl: '/images/20.jpg',
  },
  {
    id: 3,
    title: 'Chill British Shorthair',
    description: 'Laid-back and cuddly, perfect for any family.',
    imageUrl: '/images/20.jpg',
  },
];

export default function Banner() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Auctions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockAuctions.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
                <p className="text-gray-600 mt-2">{cat.description}</p>
                <Link
                  href={`/auction/${cat.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Bid Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
