import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-purple-600">Joey's</span> World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Blogger, Creator, and Storyteller - Sharing inspiration, creativity, and life experiences
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Read Blog
            </Link>
            <Link
              href="/about"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              About Joey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">My Creative Journey</h3>
            <p className="text-gray-600 mb-4">Discover how I started my blogging adventure and what inspires me every day...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline">Read more →</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Tips for Creators</h3>
            <p className="text-gray-600 mb-4">Essential advice for anyone starting their creative journey in the digital world...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline">Read more →</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Life & Inspiration</h3>
            <p className="text-gray-600 mb-4">Finding beauty in everyday moments and sharing stories that matter...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline">Read more →</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Joey's Community</h2>
          <p className="text-xl mb-8">Stay updated with the latest posts and exclusive content</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}
