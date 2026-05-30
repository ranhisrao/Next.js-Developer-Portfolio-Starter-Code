import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeView, setActiveView] = useState('home')

  return (
    <>
      <Head>
        <title>Ranhis Rao | HCI Digital Portfolio</title>
        <meta name="description" content="Personal Portfolio of Ranhis Rao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { background-color: #fafafa !important; color: #1a1a1a !important; font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] flex flex-col">
        
        {/* MINIMALIST TOP NAVIGATION BAR */}
        <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-200">
          <div className="font-bold text-xl tracking-tight cursor-pointer" onClick={() => setActiveView('home')}>
            RR.
          </div>
          <nav className="flex gap-8 font-medium text-sm text-gray-600">
            <button onClick={() => setActiveView('home')} className={`hover:text-black transition-colors ${activeView === 'home' ? 'text-black underline font-semibold' : ''}`}>Home</button>
            <button onClick={() => setActiveView('about')} className={`hover:text-black transition-colors ${activeView === 'about' ? 'text-black underline font-semibold' : ''}`}>About & Education</button>
            <button onClick={() => setActiveView('projects')} className={`hover:text-black transition-colors ${activeView === 'projects' ? 'text-black underline font-semibold' : ''}`}>Projects</button>
          </nav>
        </header>

        {/* MAIN TEMPLATE VIEWPORT CONTAINER */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex items-center justify-center">
          
          {/* VIEW 1: MAIN LANDING HOME PAGE */}
          {activeView === 'home' && (
            <div className="grid grid-cols-12 gap-12 items-center w-full animate-fade-in">
              {/* Left Side: Mock Graphic Vector Placeholder Box */}
              <div className="col-span-5 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full flex items-center justify-center shadow-inner relative border border-gray-200">
                  <span className="text-sm font-semibold text-gray-400">System Developer Illustration</span>
                  {/* Floating Circular Badge Component */}
                  <div className="absolute -bottom-2 -right-2 bg-black text-white text-xs px-3 py-3 rounded-full font-bold tracking-wider uppercase animate-bounce">
                    HCI Web
                  </div>
                </div>
              </div>
              
              {/* Right Side: Original Template Typography Text Layout */}
              <div className="col-span-7 flex flex-col items-start">
                <h1 className="text-5xl font-black tracking-tight leading-tight mb-4 text-gray-900">
                  Turning Vision Into Reality With Code And Design.
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  I am an Information Technology undergraduate student specializing in Computer Science (Computer Networking) at Universiti Teknikal Malaysia Melaka[cite: 74, 77, 80]. 
                  With a solid background from my Diploma in IT (Digital Technology) from Politeknik Balik Pulau[cite: 1, 9], I focus on software optimization, 
                  relational schema auditing, and deploying secure local area network environments.
                </p>
                <div className="flex gap-4 items-center">
                  <a href="mailto:ranhisrao310504@gmail.com" className="bg-black text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm">
                    Contact Me
                  </a>
                  <button onClick={() => setActiveView('about')} className="text-sm font-semibold underline text-gray-800 hover:text-black">
                    View Academic History &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: ABOUT & EDUCATION TIMELINE */}
          {activeView === 'about' && (
            <div className="w-full max-w-3xl animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Biography & Academic History</h2>
              <p className="text-gray-500 text-sm mb-8">Verification profile data extracted from institutional transcripts.</p>
              
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
                <h3 className="font-bold text-gray-800 mb-2">RANHIS RAO A/L KRISHNAMURTHY</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Student Matric ID: B032510131[cite: 93]. Passionate about structural user-interface logic fields, tracking algorithmic execution marks, and mapping operational server metrics.
                </p>
              </div>

              <h3 className="text-lg font-bold mb-4 text-gray-800">Education Chronology</h3>
              <div className="border-l-2 border-gray-200 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 bg-black w-4 h-4 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-gray-900">Bachelor of Computer Science (Computer Networking) with Honors [cite: 77]</h4>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">2025 - Present</span>
                  <p className="text-xs text-gray-500 mt-1">Universiti Teknikal Malaysia Melaka | Faculty of Information and Communication Technology[cite: 80, 115].</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 bg-gray-300 w-4 h-4 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-gray-900">Diploma in Information Technology (Digital Technology) [cite: 1]</h4>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">2022 - 2025 (Completed) [cite: 1]</span>
                  <p className="text-xs text-gray-500 mt-1">Politeknik Balik Pulau, Pulau Pinang | Final Cumulative GPA: 3.43[cite: 2, 32].</p>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: WORKS PRODUCED GRID */}
          {activeView === 'projects' && (
            <div className="w-full animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Works & Lab Projects</h2>
              <p className="text-gray-500 text-sm mb-8">System architectures engineered during course evaluations.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:border-black transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Application Development</span>
                  <h3 className="font-bold text-lg mt-1 mb-2">Student Attendance Tracker</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    A desktop system tracking student parameters systematically by linking modular logic layers to localized relational query engines.
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xxs font-medium">C++ Logic</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xxs font-medium">MySQL Instance</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:border-black transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Infrastructure Engineering</span>
                  <h3 className="font-bold text-lg mt-1 mb-2">Enterprise Routing Topology</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Designed and managed corporate networks running explicit VLSM address calculations and loops checking utilizing Spanning Tree Protocol (STP).
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xxs font-medium">Cisco Terminal</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xxs font-medium">STP Execution</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  )
}
