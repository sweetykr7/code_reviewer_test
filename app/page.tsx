import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Welcome to <span className="text-purple-600 inline-block animate-float">Joey's</span> World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
            Blogger, Creator, and Storyteller - Sharing inspiration, creativity, and life experiences
          </p>
          <div className="flex gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
            <Link
              href="/blog"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 hover:scale-110 transition-all duration-300 hover:shadow-2xl transform hover:rotate-1"
            >
              Read Blog
            </Link>
            <Link
              href="/about"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 hover:scale-110 transition-all duration-300 hover:shadow-2xl transform hover:-rotate-1"
            >
              About Joey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fadeIn">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:rotate-1 animate-fadeInUp cursor-pointer" style={{animationDelay: '0.2s', opacity: 0}}>
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 animate-gradient transform hover:scale-105 transition-transform duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">My Creative Journey</h3>
            <p className="text-gray-600 mb-4">Discover how I started my blogging adventure and what inspires me every day...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1 group">
              Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fadeInUp cursor-pointer" style={{animationDelay: '0.4s', opacity: 0}}>
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg mb-4 animate-gradient transform hover:scale-105 transition-transform duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">Tips for Creators</h3>
            <p className="text-gray-600 mb-4">Essential advice for anyone starting their creative journey in the digital world...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1 group">
              Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:-rotate-1 animate-fadeInUp cursor-pointer" style={{animationDelay: '0.6s', opacity: 0}}>
            <div className="h-48 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg mb-4 animate-gradient transform hover:scale-105 transition-transform duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">Life & Inspiration</h3>
            <p className="text-gray-600 mb-4">Finding beauty in everyday moments and sharing stories that matter...</p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1 group">
              Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Join Joey's Community</h2>
          <p className="text-xl mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>Stay updated with the latest posts and exclusive content</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-slow">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}
