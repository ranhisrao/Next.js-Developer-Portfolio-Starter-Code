import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import ProfilePic from "../../public/images/profile/developer-pic-1.png"
import Image from 'next/image'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranhis Rao | HCI Digital Portfolio</title>
        <meta name="description" content="Personal Portfolio of Ranhis Rao A/L Krishnamurthy" />
      </Head>
      
      {/* Original multi-page premium transition curtain effect */}
      <TransitionEffect />
      
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            
            {/* Left Column: Original Avatar Artwork Image Vector */}
            <div className='w-1/2 md:w-full'>
              <Image 
                src={ProfilePic} 
                alt="Ranhis Rao Portfolio Graphic" 
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            
            {/* Right Column: Original Typography Grid Layout */}
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              
              {/* Native Staggered Letter Typing Animation */}
              <AnimatedText 
                text="Turning Vision Into Reality With Code And Design." 
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              
              {/* Profile Bio mapped with your verified academic records */}
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-gray-700 dark:text-gray-300'>
                I am an Information Technology student specializing in Computer Science (Computer Networking) at Universiti Teknikal Malaysia Melaka. 
                Leveraging a robust foundational background from my Diploma in IT (Digital Technology) at Politeknik Balik Pulau, I focus on software optimization, 
                relational database schema auditing, and deploying secure local area network environments.
              </p>
              
              {/* Original Button Actions */}
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <a 
                  href="mailto:ranhisrao310504@gmail.com" 
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Contact Me <LinkArrow className={"w-6 ml-1"} />
                </a>
                
                <a 
                  href="mailto:ranhisrao310504@gmail.com" 
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Email Profile
                </a>
              </div>
              
            </div>
          </div>
        </Layout>

        {/* NATIVE ROTATING WHEEL BADGE ("Frontend Developer") */}
        <HireMe />
      </main>
    </>
  )
}
