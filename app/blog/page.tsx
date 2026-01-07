import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "My Journey as a Blogger",
    excerpt: "How I started my blogging career and the lessons I learned along the way. From the first post to building a community...",
    date: "December 15, 2024",
    category: "Personal",
    readTime: "5 min read",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    title: "10 Tips for Aspiring Content Creators",
    excerpt: "Essential advice for anyone looking to start their journey in content creation. Learn from my experiences and avoid common mistakes...",
    date: "December 10, 2024",
    category: "Tips & Advice",
    readTime: "8 min read",
    gradient: "from-blue-400 to-purple-400"
  },
  {
    id: 3,
    title: "Finding Inspiration in Everyday Life",
    excerpt: "How to discover creative ideas in your daily routine. Sometimes the best stories are right in front of us...",
    date: "December 5, 2024",
    category: "Inspiration",
    readTime: "6 min read",
    gradient: "from-pink-400 to-red-400"
  },
  {
    id: 4,
    title: "The Power of Authentic Storytelling",
    excerpt: "Why being genuine matters more than perfection. My thoughts on creating content that truly connects with your audience...",
    date: "November 28, 2024",
    category: "Writing",
    readTime: "7 min read",
    gradient: "from-green-400 to-blue-400"
  },
  {
    id: 5,
    title: "Building a Creative Community",
    excerpt: "How to connect with like-minded people and grow together. The importance of collaboration and mutual support...",
    date: "November 20, 2024",
    category: "Community",
    readTime: "6 min read",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    id: 6,
    title: "My Favorite Tools for Content Creation",
    excerpt: "A comprehensive guide to the apps, software, and tools I use daily to create engaging content...",
    date: "November 15, 2024",
    category: "Resources",
    readTime: "10 min read",
    gradient: "from-indigo-400 to-purple-400"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Joey's Blog</h1>
          <p className="text-xl text-purple-100">
            Stories, insights, and inspiration from my creative journey
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-white border-t border-gray-200 py-12 mt-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Never Miss a Post
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get the latest articles delivered straight to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
