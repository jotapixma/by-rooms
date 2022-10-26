import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import styles from './ShoppingCard.module.scss'

const ShoppingCard = () => {
  const [quantity, setQuantity] = useState(10);

  const handleChangeQuantity = (event) => {
    // console.log('entre aqui')
    setQuantity(event.target.value);
  };

  return (  
    <article className={styles.shoppingCard}>
      <div className={styles.itemsRow}>
        <div className={styles.itemsRow__imgSide}>
          <figure className={styles.imgCard}>
            <Image src="/modal-product.png" width={85} height={73} layout="intrinsic" alt="product" />
          </figure>

        </div>
        <div className={styles.itemsRow__infoSide}>
          <div className={styles.textPanel}>
            <h5 className={styles.title}>Trotadora eléctrica E100 MP3 Edition</h5>
            <p className={styles.description}>Lorem: <b>Lorem Ipsum</b></p>
            <p className={styles.description}>Método de entrega: <b>Chile Express</b></p>
          </div>
        </div>
      </div>
      <div className={styles.itemsRow}>
        <div className={styles.itemsRow__imgSide}>
          <div className={styles.optionRow}>
            <FavoriteBorderIcon />
            <p className={styles.description}>Mis favoritos</p>
          </div>
          <div className={styles.optionRow}>
            <CloseIcon />
            <p className={styles.description}>Eliminar</p>
          </div>
        </div>
        <div className={styles.itemsRow__infoSide}>
          <div className={styles.boxPrice}>
            <span className={styles.boxPrice__discount}>$159.990</span>
            <span className={styles.boxPrice__normal}>$320.000</span>
          </div>
      
          <Box sx={{ width: '25%' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                label="Cantidad"
                onChange={handleChangeQuantity}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
   
        </div>
      </div>
    </article>
  );
}
 
export default ShoppingCard;