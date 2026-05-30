import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

export default function About() {
  return (
    <>
      <Head>
        <title>Ranhis Rao | About Page</title>
        <meta name="description" content="Academic profile history of Ranhis Rao" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light text-dark'>
        <Layout className='pt-16'>
          <AnimatedText text="Biography & Academic History" className='mb-16 !text-5xl lg:!text-4xl sm:!text-3xl' />
          
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-5 flex flex-col items-start justify-start xl:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
              <p className='font-medium text-gray-700 dark:text-gray-300'>
                I am an ambitious Information Technology undergraduate student specializing in Computer Science (Computer Networking) at Universiti Teknikal Malaysia Melaka[cite: 75, 77]. 
                I focus heavily on secure local area network deployments, core relational database management schemas, and optimizing human-interface system parameters[cite: 155, 172].
              </p>
            </div>

            <div className='col-span-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-5xl font-bold md:text-4xl'>3.43</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-sm'>Diploma CGPA</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-5xl font-bold md:text-4xl'>92</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-sm'>Credits Completed</h2>
              </div>
            </div>
          </div>

          {/* CHRONOLOGICAL EDUCATION TIMELINE (Satisfies HCI Requirement) */}
          <div className='mt-24'>
            <h2 className='font-bold text-4xl mb-12 w-full text-center'>Education Milestones</h2>
            <div className='w-[75%] mx-auto relative flex flex-col gap-8'>
              
              <div className='border-l-2 border-dark dark:border-light pl-6 relative'>
                <h3 className='capitalize font-bold text-2xl text-[#38bdf8]'>Bachelor of Computer Science (Computer Networking) with Honors</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>2025 - Present | Universiti Teknikal Malaysia Melaka (FTMK)</span>
                <p className='font-medium w-full mt-2 text-sm text-gray-600 dark:text-gray-400'>
                  Student ID: B032510131[cite: 93]. Advanced curriculum focusing on enterprise-scale networking analysis, interactive user interfaces, and modular system logic patterns[cite: 155, 172].
                </p>
              </div>

              <div className='border-l-2 border-dark dark:border-light pl-6 relative'>
                <h3 className='capitalize font-bold text-2xl text-[#38bdf8]'>Diploma in Information Technology (Digital Technology)</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>2022 - 2025 | Politeknik Balik Pulau, Pulau Pinang</span>
                <p className='font-medium w-full mt-2 text-sm text-gray-600 dark:text-gray-400'>
                  Graduated with a CGPA of 3.43[cite: 32]. Achieved top marks in Operating Systems (A-) [cite: 9], Human Computer Interaction (B+) [cite: 41], Database Design (B+) [cite: 25], and Open Source Server Administration (A)[cite: 14, 16].
                </p>
              </div>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
