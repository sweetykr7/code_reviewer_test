export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Joey</h1>
          <p className="text-xl text-purple-100">
            Blogger, Creator, and Passionate Storyteller
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hi, I'm Joey!</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to my corner of the internet! I'm a passionate blogger and content creator
                dedicated to sharing stories, insights, and inspiration with a growing community of
                creative minds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey started with a simple desire to share my thoughts and experiences with
                the world. Today, I'm grateful to connect with thousands of readers who find value
                in what I create.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Writing</h3>
              <p className="text-gray-600">
                Crafting engaging blog posts about life, creativity, and personal growth that
                resonate with readers worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creating</h3>
              <p className="text-gray-600">
                Producing visual and written content that inspires others to pursue their creative
                passions and express themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Fostering a supportive community where creative individuals can connect, share,
                and grow together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspiring</h3>
              <p className="text-gray-600">
                Sharing insights and experiences that motivate others to embrace their unique
                journey and create meaningful content.
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">My Story</h2>
          <p className="text-lg leading-relaxed mb-4">
            My blogging journey began several years ago when I decided to share my thoughts and
            experiences online. What started as a personal hobby quickly grew into a passion that
            transformed my life.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Through consistent effort, authentic storytelling, and a genuine desire to connect with
            others, I've built a community of engaged readers who inspire me every day.
          </p>
          <p className="text-lg leading-relaxed">
            Today, I continue to create content that matters, share stories that resonate, and help
            others discover their own creative voice.
          </p>
        </div>

        {/* Connect */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Let's Connect!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I love hearing from my readers! Whether you have a question, want to collaborate,
            or just want to say hello, feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Send Message
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors">
              Follow on Social
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
