//@flow
import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container'
import styles from '../styles/components/Hero.module.scss';

/**
 * Muestra el hero
 * @component
 */

const Hero = () => {

  const [product, setIsProduct] = useState('avena1');

  useEffect(() => {
    console.log('mounted ok!')
 
  },[])

    return (
      <section className={styles.hero}>
        <Container>
            <h1>AQUI EL HERO CON LAS CATEGORIAS</h1>
        </Container>
      </section>
    );
};

export default Hero;

