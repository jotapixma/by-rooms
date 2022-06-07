import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <TopNav/>
      <Hero/>
    </>
  )
}

