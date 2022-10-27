//@flow
import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image'
// import styles from '../styles/components/Hero.module.scss';
import ProductCard from "../Cards/ProductCard/ProductCard";
import styles from './ProductList.module.scss'

let items = [
  {
    "id": 1,
    "image": "/sunglases-rayban.png",
    "title": 'Rooms XP12',
    "description": 'Encuentra productos con despacho rápido en RM.'
  },
  {
    "id": 2,
    "image": "/sunglases-rayban.png",
    "title": 'Rooms Club C3',
    "description": 'Encuentra productos con despacho rápido en RM.'
  },
  {
    "id": 3,
    "image": "/sunglases-rayban.png",
    "title": 'Rooms light',
    "description": 'Encuentra productos con despacho rápido en RM.'
  },
  {
    "id": 4,
    "image": "/sunglases-rayban.png",
    "title": 'Rooms Black',
    "description": 'Encuentra productos con despacho rápido en RM.'
  },
];


const ProductList = ({title}) => {
    return (
      <section className={styles.productList}>
        <Container>
          <h1 className={styles.titleSection}>{title}</h1>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={6} md={3} key={item.id}>
                <ProductCard product={item}/>
              </Grid>
              ))
            }
          </Grid>
        </Container>
      </section>
    );
};

export default ProductList;

