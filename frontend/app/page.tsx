import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="pt-16 flex-grow">
        <section className="text-center py-10 px-4">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to CSC309 Cat Auction</h1>
          <p className="mt-4 text-lg text-gray-600">
            Bid, Purr, Win – Your Ultimate Online Auction Experience! 🐾
          </p>

          <div className="relative w-full max-w-4xl h-200 mx-auto mt-6">
            <Image
              src="/images/bid.jpg"
              alt="Cat Auction Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
