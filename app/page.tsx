import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      
      {/* Hero Section */}
      <section className="w-full bg-green-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Ancient Wisdom, Modern Wellness</h1>
        <p className="text-lg mb-6">Authentic Ayurveda for today’s families</p>
        <div className="space-x-4">
          <a href="/products" className="bg-green-600 text-white px-6 py-2 rounded">Explore Products</a>
          <a 
  href="/consultation" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded"
>
  Book Consultation
</a></div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Vision & Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We bring authentic Ayurveda into modern life, balancing tradition with contemporary wellness needs.
        </p>
      </section>

      {/* Product Highlights */}
      <section className="w-full py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded shadow">
            <Image src="/suvarnaprashan.jpg" alt="Suvarnaprashan" width={400} height={250} />
            <h3 className="text-xl font-bold mt-4">Suvarnaprashan</h3>
            <p className="text-gray-600 mt-2">Boosts immunity and enhances memory in children.</p>
            <a href="/products/suvarnaprashan" className="text-green-600 mt-4 inline-block">Learn More</a>
          </div>
          <div className="p-6 border rounded shadow">
            <Image src="/chyavanprash.jpg" alt="Chyavanprash" width={400} height={250} />
            <h3 className="text-xl font-bold mt-4">Chyavanprash</h3>
            <p className="text-gray-600 mt-2">A rejuvenating tonic for strength and vitality.</p>
            <a href="/products/chyavanprash" className="text-green-600 mt-4 inline-block">Learn More</a>
          </div>
        </div>
      </section>

      {/* Doctor’s Note */}
      <section className="w-full py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Doctor’s Note</h2>
        <Image src="/doctor.jpg" alt="Dr. Harshali" width={150} height={150} className="mx-auto rounded-full" />
        <p className="max-w-xl mx-auto mt-6 text-gray-700">
          My vision is to bring authentic Ayurveda to modern families, blending tradition with innovation.
        </p>
        <a href="/about" className="text-green-600 mt-4 inline-block">Read More About Us</a>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 px-8 bg-green-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded shadow">
            <p>"Suvarnaprashan has truly boosted my child’s immunity!"</p>
            <span className="block mt-4 font-semibold">– Parent</span>
          </div>
          <div className="p-6 border rounded shadow">
            <p>"Chyavanprash gave me renewed energy and focus."</p>
            <span className="block mt-4 font-semibold">– Customer</span>
          </div>
          <div className="p-6 border rounded shadow">
            <p>"Consultation was insightful and personalized."</p>
            <span className="block mt-4 font-semibold">– Client</span>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="w-full py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold">Ayurveda for Modern Families</h3>
            <p className="text-gray-600 mt-2">Discover how ancient practices fit into today’s lifestyle.</p>
            <a href="/blog/ayurveda-modern" className="text-green-600 mt-4 inline-block">Read More</a>
          </div>
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold">Immunity Boosting Herbs</h3>
            <p className="text-gray-600 mt-2">Learn about natural ways to strengthen immunity.</p>
            <a href="/blog/immunity-herbs" className="text-green-600 mt-4 inline-block">Read More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-10 text-center">
        <div className="space-x-4 mb-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <p className="text-sm mb-4">*These products are Ayurvedic supplements, not medical substitutes.*</p>
        <div className="space-x-4">
          <a href="https://instagram.com/YOURHANDLE">Instagram</a>
          <a href="https://facebook.com/YOURHANDLE">Facebook</a>
          <a href="https://youtube.com/YOURHANDLE">YouTube</a>
        </div>
      </footer>

    </main>
  );
}