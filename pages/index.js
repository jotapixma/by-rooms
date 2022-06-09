import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import AboutUs from '../components/AboutUs'

export default function Home() {
  return (
    <>
      <TopNav/>
      <Hero/>
      <FeaturedProduct/>
      <AboutUs/>
    </>
  )
}

