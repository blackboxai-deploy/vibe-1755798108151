'use client'

import { useState, useEffect } from 'react'

export default function HelloWorldPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hello World Content */}
        <div 
          className={`transform transition-all duration-1000 ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hello World
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to your beautiful new web application built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Fast</h3>
              <p className="text-slate-600 text-sm">
                Built with Next.js for optimal performance and user experience.
              </p>
            </div>
            
            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Beautiful</h3>
              <p className="text-slate-600 text-sm">
                Styled with Tailwind CSS for modern, responsive design.
              </p>
            </div>
            
            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Modern</h3>
              <p className="text-slate-600 text-sm">
                TypeScript powered for better development experience.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
              <span className="flex items-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            Built with ❤️ using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}