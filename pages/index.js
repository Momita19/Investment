import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Announcement from './components/Announcement.js'
import Stressfree from './components/Stressfree'
import Fdbazar from './components/Fdbazar'
import Savings from './components/Savings'
import Fixed from './components/Fixed'
import TaxSaver from './components/TaxSaver'
import Learning from './components/Learning'
// import MeetTeam from './components/MeetTeam'
// import Team from './components/Team'
import TeamContainer from './components/TeamContainer'
import Press from './components/Press'
import Footer from './components/Footer'
import FollowUs from './components/FollowUs'
import StartInvesting from './components/StartInvesting'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Investment App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="investment techniques, do Stress-free Investing" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      
      </Head>

      <Navbar/>
      <Announcement/>
      <Stressfree/>
      <Fdbazar/>
      <Savings/>
      <TaxSaver/>
      <Fixed />
      <Learning/>
      <TeamContainer/>
      <Press/>
      <FollowUs/>
      <StartInvesting/>

      <Script src='/about.js' strategy="lazyONload">

      </Script>
      <main className={styles.main}>
      <div className={styles.description}>
    </div>
      </main>
      <Footer/>
      {/* </div> */}
    </>
  )
}
