import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
// import Hero from '../components/Hero'
import ProductList from '../components/ProductList/ProductList'
import AboutUs from '../components/AboutUs'

let items = [
  {
    "id": 1,
    "description": '<p>Nuestros lentes de cultivo indoor, no son solo para protección y contraste, también son gafas de sol y accesorio de moda, ya que conjugan estilo y los cuidados necesarios para tus ojos.</p>'
  },
  {
    "id": 2,
    "description": '<p>Nuestros lentes edición Summer, no son solo para protección y contraste, también son gafas de sol y accesorio de moda, ya que conjugan estilo y los cuidados necesarios para tus ojos.</p>'
  },
];

export default function Home() {
  return (
    <>
      {/* <Hero/> */}
      <ProductList title="Rooms Indoor" description={items[0].description}/>
      <ProductList title="Rooms Summer" description={items[1].description} />
      {/* <AboutUs/> */}
    </>
  )
}

