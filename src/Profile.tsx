import React from 'react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg"></div>
        <div className="px-6 pb-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white absolute -top-20"
            />
          </div>
          <div className="pt-24">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-xl text-gray-600">Senior Frontend Developer at TechCorp</p>
                <p className="text-sm text-gray-500 mt-2">San Francisco Bay Area • 500+ connections</p>
                <div className="mt-4 space-x-2">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Open to
                  </button>
                  <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                    Add profile section
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition">
                    More
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600 font-medium">TechCorp</p>
                <p className="text-gray-600">Stanford University</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="text-gray-600">
          Passionate frontend developer with 8+ years of experience building scalable web applications. 
          Specialized in React, TypeScript, and modern web technologies. Leading frontend initiatives 
          at TechCorp and mentoring junior developers. Always excited to learn new technologies and 
          solve complex problems.
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded"></div>
            <div>
              <h3 className="font-semibold">Senior Frontend Developer</h3>
              <p className="text-gray-600">TechCorp · Full-time</p>
              <p className="text-sm text-gray-500">Jan 2020 - Present · 3 yrs 3 mos</p>
              <p className="text-gray-600 mt-2">
                Leading frontend development for TechCorp's main product suite. 
                Managing a team of 5 developers and architecting scalable solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded"></div>
            <div>
              <h3 className="font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">StartupX · Full-time</p>
              <p className="text-sm text-gray-500">Jun 2017 - Dec 2019 · 2 yrs 7 mos</p>
              <p className="text-gray-600 mt-2">
                Developed and maintained multiple client-facing applications.
                Implemented responsive designs and improved performance metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded"></div>
          <div>
            <h3 className="font-semibold">Stanford University</h3>
            <p className="text-gray-600">Master of Science - MS, Computer Science</p>
            <p className="text-sm text-gray-500">2015 - 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;