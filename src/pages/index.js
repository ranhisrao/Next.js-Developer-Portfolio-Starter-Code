import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <>
      <Head>
        <title>Ranhis Rao - HCI Digital Portfolio</title>
        <meta name="description" content="HCI Portfolio produced for BITM 2313 evaluation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Force-injecting Tailwind CSS utilities directly into the viewport engine */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      {/* Embedded CSS safe frame to guarantee your custom colors and layouts load instantly */}
      <style jsx global>{`
        body { background-color: #0f172a !important; color: #f8fafc !important; font-family: sans-serif; }
        .custom-card:hover { transform: translateY(-4px); border-color: #38bdf8; box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.2); }
        .page-entry { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="flex min-h-screen bg-[#0f172a] text-[#f8fafc]">
        
        {/* SIDEBAR CONTAINER */}
        <nav className="w-64 bg-[#0b0f19] border-r border-gray-800 p-6 flex flex-col gap-2 fixed h-screen z-10">
          <div className="text-sm text-[#38bdf8] font-extrabold mb-8 tracking-wider pl-3 border-l-4 border-[#38bdf8]">
            DIGITAL PORTFOLIO
          </div>
          
          {[
            { id: 'personal', label: '1. Personal Details' },
            { id: 'academic', label: '2. Academic History' },
            { id: 'works', label: '3. Works & Projects' },
            { id: 'qualities', label: '4. Personal Qualities' },
            { id: 'contact', label: '5. Connect / Feedback' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left py-3 px-4 border-l-4 rounded-r-md font-semibold text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-[#38bdf8] border-[#38bdf8] pl-5'
                  : 'border-transparent text-gray-400 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* MAIN PRESENTATION SECTION */}
        <main className="flex-1 ml-64 py-12 px-16 max-w-5xl">
          
          {/* VIEWSTATE 1: PERSONAL DETAILS */}
          {activeTab === 'personal' && (
            <div className="page-entry">
              <h2 className="text-3xl font-bold text-white mb-1">Personal & Contact Details</h2>
              <p className="text-gray-400 text-sm mb-8">Primary academic profile configuration data layouts.</p>
              
              <div className="custom-card bg-[#1e293b] border border-gray-700 p-8 rounded-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">FULL NAME</span>
                    <p className="text-base text-gray-200">RANHIS RAO A/L KRISHNAMURTHY</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">ROLE ASSIGNMENT</span>
                    <p className="text-base text-gray-200">Computer Systems & Networking Student</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">EMAIL HOST PATHWAY</span>
                    <p className="text-base text-gray-200">ranhisrao310504@gmail.com</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">CAMPUS INSTITUTION</span>
                    <p className="text-base text-gray-200">Universiti Teknikal Malaysia Melaka</p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-700 text-gray-300 text-sm leading-relaxed">
                  <strong>Brief Profile:</strong> I am focused on software optimization, core relational database management system schemas, and secure local area network deployment environments.
                </div>
              </div>
            </div>
          )}

          {/* VIEWSTATE 2: ACADEMIC HISTORY */}
          {activeTab === 'academic' && (
            <div className="page-entry">
              <h2 className="text-3xl font-bold text-white mb-1">Academic History</h2>
              <p className="text-gray-400 text-sm mb-8">Chronological record of academic progression milestones.</p>
              
              <div className="custom-card bg-[#1e293b] border border-gray-700 border-l-4 border-l-[#38bdf8] p-8 rounded-xl mb-6 transition-all duration-300">
                <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">2025 - PRESENT</span>
                <h3 className="text-lg font-bold text-white mb-1">Bachelor of Computer Science (Computer Networking) with Honors</h3>
                <p className="text-sm text-gray-400 mb-2">Universiti Teknikal Malaysia Melaka (FTMK)</p>
                <p className="text-sm text-gray-300">Student ID: B032510131 | Specialized focuses include advanced structural UI design, human interface parameters, and secure infrastructure logic rules.</p>
              </div>

              <div className="custom-card bg-[#1e293b] border border-gray-700 p-8 rounded-xl transition-all duration-300">
                <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">2022 - 2025 (COMPLETED)</span>
                <h3 className="text-lg font-bold text-white mb-1">Diploma in Information Technology (Digital Technology)</h3>
                <p className="text-sm text-gray-400 mb-2">Politeknik Balik Pulau, Pulau Pinang (CGPA: 3.43)</p>
                <p className="text-sm text-gray-300">Acquired excellent background logic marks in Human Computer Interaction (B+), Operating Systems (A-), Enterprise Networks, and Database Design.</p>
              </div>
            </div>
          )}

          {/* VIEWSTATE 3: WORKS PRODUCED */}
          {activeTab === 'works' && (
            <div className="page-entry">
              <h2 className="text-3xl font-bold text-white mb-1">Works Produced</h2>
              <p className="text-gray-400 text-sm mb-8">Compilation of applications and system infrastructures engineered.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="custom-card bg-[#1e293b] border border-gray-700 p-6 rounded-xl transition-all duration-300">
                  <h3 className="text-base font-bold text-white mb-1">Student Attendance Tracker</h3>
                  <p className="text-gray-400 text-xs mb-4">A modular structural database application engineered using relational data mappings to trace core student metrics reliably.</p>
                  <div className="flex gap-2">
                    <span className="bg-blue-900/40 text-[#38bdf8] border border-blue-800 px-2 py-0.5 rounded text-xs font-semibold">C++ Architecture</span>
                    <span className="bg-blue-900/40 text-[#38bdf8] border border-blue-800 px-2 py-0.5 rounded text-xs font-semibold">MySQL Engine</span>
                  </div>
                </div>

                <div className="custom-card bg-[#1e293b] border border-gray-700 p-6 rounded-xl transition-all duration-300">
                  <h3 className="text-base font-bold text-white mb-1">Enterprise Routing Topology</h3>
                  <p className="text-gray-400 text-xs mb-4">Designed industry network architectures running explicit VLSM structural layouts and active loop configuration handling under STP loops.</p>
                  <div className="flex gap-2">
                    <span className="bg-blue-900/40 text-[#38bdf8] border border-blue-800 px-2 py-0.5 rounded text-xs font-semibold">Cisco CLI</span>
                    <span className="bg-blue-900/40 text-[#38bdf8] border border-blue-800 px-2 py-0.5 rounded text-xs font-semibold">STP / VLSM Layouts</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEWSTATE 4: PERSONAL QUALITIES */}
          {activeTab === 'qualities' && (
            <div className="page-entry">
              <h2 className="text-3xl font-bold text-white mb-1">Personal Qualities</h2>
              <p className="text-gray-400 text-sm mb-8">Core engineering competencies driving execution capabilities.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="custom-card bg-[#1e293b] border border-gray-700 p-6 rounded-xl transition-all duration-300">
                  <h4 className="text-[#38bdf8] font-bold text-base mb-1">Analytical System Triage</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">Proficient at isolating network stack discrepancies, debugging mismatched infrastructure parameters systematically, and logging useful logic details cleanly.</p>
                </div>
                <div className="custom-card bg-[#1e293b] border border-gray-700 p-6 rounded-xl transition-all duration-300">
                  <h4 className="text-[#38bdf8] font-bold text-base mb-1">Team Integration Flow</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">Dedicated to functional repository tracking, maintaining structured branch allocations, and contributing documentation data arrays cleanly to cooperative projects.</p>
                </div>
              </div>
            </div>
          )}

          {/* VIEWSTATE 5: CONNECT / FEEDBACK */}
          {activeTab === 'contact' && (
            <div className="page-entry">
              <h2 className="text-3xl font-bold text-white mb-1">Connect & Feedback</h2>
              <p className="text-gray-400 text-sm mb-8">Interactive human interface field showcasing explicit form validation states.</p>
              
              <div className="bg-[#1e293b] border border-gray-700 p-8 rounded-xl">
                <form onSubmit={(e) => { e.preventDefault(); alert('Interaction Success: Evaluation metrics logged safely.'); }}>
                  <div className="mb-4">
                    <label className="font-semibold text-gray-300 text-xs block mb-2">Visitor Identity Node</label>
                    <input 
                      type="text" 
                      placeholder="Type your full name here" 
                      className="w-full p-3 border border-gray-700 bg-[#0f172a] text-white text-sm rounded-lg outline-none focus:border-[#38bdf8] transition-all duration-200"
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold text-gray-300 text-xs block mb-2">Interface Feedback Comment Array</label>
                    <textarea 
                      rows="4" 
                      placeholder="Provide interface evaluation remarks here..." 
                      className="w-full p-3 border border-gray-700 bg-[#0f172a] text-white text-sm rounded-lg outline-none focus:border-[#38bdf8] transition-all duration-200"
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-[#38bdf8] text-[#0f172a] text-xs font-bold py-3 px-6 rounded-lg hover:bg-[#0ea5e9] transition-all duration-200"
                  >
                    Transmit Message
                  </button>
                </form>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  )
}
