import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('personal')

  // Dynamic variants for smooth Framer-Motion transition animations
  const tabContentVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <>
      <Head>
        <title>Ranhis Rao - HCI Digital Portfolio</title>
        <meta name="description" content="HCI Portfolio produced for BITM 2313 evaluation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans antialiased">
        
        {/* INTERACTIVE NAVIGATION SIDEBAR */}
        <nav className="w-[280px] bg-[#0b0f19] border-r border-[#1e293b] p-8 flex flex-col gap-2 fixed h-screen z-10">
          <div className="text-lg text-[#38bdf8] font-extrabold mb-10 tracking-wider pl-3 border-l-4 border-[#38bdf8]">
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
              className={`w-full text-left py-3 px-5 border-l-4 rounded-r-lg font-semibold text-[0.95rem] transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#1e293b] text-[#38bdf8] border-[#38bdf8] pl-6'
                  : 'border-transparent text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e293b]/40 hover:pl-6'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* MAIN VIEWER AREA */}
        <main className="flex-1 ml-[280px] py-16 px-20 max-w-[1100px]">
          
          {/* TAB 1: PERSONAL DETAILS */}
          {activeTab === 'personal' && (
            <motion.div key="personal" variants={tabContentVariants} initial="initial" animate="animate">
              <h2 className="text-4xl font-bold tracking-tight text-[#f8fafc] mb-2">Personal & Contact Details</h2>
              <p className="text-[#94a3b8] text-[1.05rem] mb-10">Primary academic profile configuration data layouts.</p>
              
              <div className="bg-[#1e293b] border border-[#334155] p-9 rounded-xl shadow-md hover:border-[#38bdf8] hover:-translate-y-1 transition-all duration-300">
                <div className="grid grid-cols-2 gap-7">
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">FULL NAME</span>
                    <p className="text-lg text-[#e2e8f0]">RANHIS RAO A/L KRISHNAMURTHY</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">ROLE ASSIGNMENT</span>
                    <p className="text-lg text-[#e2e8f0]">Computer Systems & Networking Student</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">EMAIL HOST PATHWAY</span>
                    <p className="text-lg text-[#e2e8f0]">ranhisrao310504@gmail.com</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">CAMPUS INSTITUTION</span>
                    <p className="text-lg text-[#e2e8f0]">Universiti Teknikal Malaysia Melaka</p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-[#334155] text-[#cbd5e1] leading-relaxed">
                  <strong>Brief Profile:</strong> I am focused on software optimization, core relational database management system schemas, and secure local area network deployment environments.
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ACADEMIC HISTORY */}
          {activeTab === 'academic' && (
            <motion.div key="academic" variants={tabContentVariants} initial="initial" animate="animate">
              <h2 className="text-4xl font-bold tracking-tight text-[#f8fafc] mb-2">Academic History</h2>
              <p className="text-[#94a3b8] text-[1.05rem] mb-10">Chronological record of academic progression milestones.</p>
              
              <div className="bg-[#1e293b] border border-[#334155] border-l-4 border-l-[#38bdf8] p-9 rounded-xl shadow-md mb-7 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">2025 - PRESENT</span>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">Bachelor of Computer Science (Computer Networking) with Honors</h3>
                <p className="text-[#94a3b8] mb-3">Universiti Teknikal Malaysia Melaka (FTMK)</p>
                <p className="text-[0.95rem] text-[#cbd5e1]">Student ID: B032510131 | Specialized focuses include advanced structural UI design, human interface parameters, and secure infrastructure logic rules.</p>
              </div>

              <div className="bg-[#1e293b] border border-[#334155] p-9 rounded-xl shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs text-[#38bdf8] font-bold tracking-wider block mb-1">2022 - 2025 (COMPLETED)</span>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">Diploma in Information Technology (Digital Technology)</h3>
                <p className="text-[#94a3b8] mb-3">Politeknik Balik Pulau, Pulau Pinang (CGPA: 3.43)</p>
                <p className="text-[0.95rem] text-[#cbd5e1]">Acquired excellent background logic marks in Human Computer Interaction (B+), Operating Systems (A-), Enterprise Networks, and Database Design.</p>
              </div>
            </motion.div>
          )}

          {/* TAB 3: WORKS PRODUCED */}
          {activeTab === 'works' && (
            <motion.div key="works" variants={tabContentVariants} initial="initial" animate="animate">
              <h2 className="text-4xl font-bold tracking-tight text-[#f8fafc] mb-2">Works Produced</h2>
              <p className="text-[#94a3b8] text-[1.05rem] mb-10">Compilation of applications and system infrastructures engineered.</p>
              
              <div className="grid grid-cols-2 gap-7">
                <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-xl shadow-md hover:border-[#38bdf8] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">Student Attendance Tracker</h3>
                  <p className="text-[#94a3b8] text-[0.95rem] mb-5">A modular structural database application engineered using relational data mappings to trace core student metrics reliably.</p>
                  <div className="flex gap-2">
                    <span className="bg-[#0284c7]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-md text-xs font-semibold">C++ Architecture</span>
                    <span className="bg-[#0284c7]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-md text-xs font-semibold">MySQL Engine</span>
                  </div>
                </div>

                <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-xl shadow-md hover:border-[#38bdf8] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">Enterprise Routing Topology</h3>
                  <p className="text-[#94a3b8] text-[0.95rem] mb-5">Designed industry network architectures running explicit VLSM structural layouts and active loop configuration handling under STP loops.</p>
                  <div className="flex gap-2">
                    <span className="bg-[#0284c7]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-md text-xs font-semibold">Cisco CLI</span>
                    <span className="bg-[#0284c7]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-md text-xs font-semibold">STP / VLSM Layouts</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: PERSONAL QUALITIES */}
          {activeTab === 'qualities' && (
            <motion.div key="qualities" variants={tabContentVariants} initial="initial" animate="animate">
              <h2 className="text-4xl font-bold tracking-tight text-[#f8fafc] mb-2">Personal Qualities</h2>
              <p className="text-[#94a3b8] text-[1.05rem] mb-10">Core engineering competencies driving execution capabilities.</p>
              
              <div className="grid grid-cols-2 gap-7">
                <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-xl shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-[#38bdf8] font-bold text-lg mb-2">Analytical System Triage</h4>
                  <p className="text-[#cbd5e1] text-[0.95rem] leading-relaxed">Proficient at isolating network stack discrepancies, debugging mismatched infrastructure parameters systematically, and logging useful logic details cleanly.</p>
                </div>
                <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-xl shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-[#38bdf8] font-bold text-lg mb-2">Team Integration Flow</h4>
                  <p className="text-[#cbd5e1] text-[0.95rem] leading-relaxed">Dedicated to functional repository tracking, maintaining structured branch allocations, and contributing documentation data arrays cleanly to cooperative projects.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: CONNECT / INTERACTIVE FEEDBACK */}
          {activeTab === 'contact' && (
            <motion.div key="contact" variants={tabContentVariants} initial="initial" animate="animate">
              <h2 className="text-4xl font-bold tracking-tight text-[#f8fafc] mb-2">Connect & Feedback</h2>
              <p className="text-[#94a3b8] text-[1.05rem] mb-10">Interactive human interface field showcasing explicit form validation states.</p>
              
              <div className="bg-[#1e293b] border border-[#334155] p-9 rounded-xl shadow-md">
                <form onSubmit={(e) => { e.preventDefault(); alert('Interaction Success: Evaluation metrics logged safely.'); }}>
                  <div className="mb-5">
                    <label className="font-semibold text-[#cbd5e1] block mb-2">Visitor Identity Node</label>
                    <input 
                      type="text" 
                      placeholder="Type your full name here" 
                      className="w-full p-3 border border-[#334155] bg-[#0f172a] text-white rounded-lg outline-none focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/15 transition-all duration-200"
                      required 
                    />
                  </div>
                  <div className="mb-5">
                    <label className="font-semibold text-[#cbd5e1] block mb-2">Interface Feedback Comment Array</label>
                    <textarea 
                      rows="4" 
                      placeholder="Provide interface evaluation remarks here..." 
                      className="w-full p-3 border border-[#334155] bg-[#0f172a] text-white rounded-lg outline-none focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/15 transition-all duration-200"
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-[#38bdf8] text-[#0f172a] font-bold py-3 px-7 rounded-lg hover:bg-[#0ea5e9] active:scale-[0.96] transition-all duration-200"
                  >
                    Transmit Message
                  </button>
                </form>
              </div>
            </motion.div>
          )}

        </main>
      </div>
    </>
  )
}
