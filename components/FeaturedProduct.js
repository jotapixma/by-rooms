//@flow
import React from "react";
import Container from 'react-bootstrap/Container'
import styles from '../styles/components/Hero.module.scss';
import rayban from '../public/sunglases-rayban.png';
import Image from 'next/image'

const FeaturedProduct = () => {

    return (
      <section>
        <Container>
          <h2>ROOMS YG-801</h2>
          <Image src={rayban} alt="Logo" class="img-fluid" />
        </Container>
      </section>
    );
};

export default FeaturedProduct;

