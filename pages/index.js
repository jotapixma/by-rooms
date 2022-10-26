import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
// import Hero from '../components/Hero'
import ProductList from '../components/ProductList/ProductList'
import AboutUs from '../components/AboutUs'

export default function Home() {
  return (
    <>
      {/* <Hero/> */}
      <ProductList title="Rooms Outdoor"/>
      <ProductList title="Rooms Summer" />
      {/* <AboutUs/> */}
    </>
  )
}

