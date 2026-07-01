import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full">

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

          <div className="text-6xl mb-4">🎓</div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Welcome to My Website
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Explore my React learning journey, projects, and hands-on tasks.
          </p>

          <p className="mt-2 text-gray-500">
            Here you'll find practical React examples, forms, hooks, routing,
            API integration, and much more.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
              🚀 View Projects
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
              📚 Explore Tasks
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
            <div className="text-5xl">⚛️</div>
            <h2 className="text-2xl font-bold mt-4">React Projects</h2>
            <p className="text-gray-600 mt-2">
              Build interactive applications using React, Hooks, Routing, and Components.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
            <div className="text-5xl">💻</div>
            <h2 className="text-2xl font-bold mt-4">Frontend Skills</h2>
            <p className="text-gray-600 mt-2">
              HTML, CSS, Tailwind CSS, JavaScript, Responsive Design, and UI Development.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
            <div className="text-5xl">📖</div>
            <h2 className="text-2xl font-bold mt-4">Learning Journey</h2>
            <p className="text-gray-600 mt-2">
              Explore assignments, mini projects, API integration, forms, and React concepts.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">
            🌟 Keep Learning • Keep Building • Keep Growing 🌟
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;