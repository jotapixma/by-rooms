import React, { useState, useEffect } from 'react';
import ShoppingCard from '../Cards/ShoppingCard/ShoppingCard';
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from '../Cards/ProductCard/ProductCard';
import styles from './SideBarShoppingCart.module.scss';

const SideBarShoppingCart = ({ toggleSideBar }) => {

  let products = [
    {
      "id": '1',
      "image": '/featured-product.png',
      "title": 'Trotadora Eléctrica E100 MP3 Edition',
      "brand": 'Ultimate',
      "delivery_type": 'Despacho express',
      "discount_rate": '36%',
      "discount_price": 159.990,
      "normal_price": 300.990,
    },
    {
      "id": '2',
      "image": '/featured-product.png',
      "title": 'Trotadora Eléctrica E100 MP3 Edition',
      "brand": 'Ultimate',
      "delivery_type": 'Despacho express',
      "discount_rate": '36%',
      "discount_price": 159.990,
      "normal_price": 300.990,
    },
    {
      "id": '3',
      "image": '/featured-product.png',
      "title": 'Trotadora Eléctrica E100 MP3 Edition',
      "brand": 'Ultimate',
      "delivery_type": 'Despacho express',
      "discount_rate": '36%',
      "discount_price": 159.990,
      "normal_price": 300.990,
    }
  ];

  return (  
    <React.Fragment>
      <div className={styles.sideBarBox}>
        <div className={styles.headPanel}>
          <h2 className={styles.title}>Carrito de compra</h2>
          <CloseIcon onClick={toggleSideBar}/>
        </div>
        <div className={styles.sideBarBox__winch}><span>Paga hasta 12 cuotas sin interés</span></div>
        <div className={styles.sideBarBox__body}>
          <ShoppingCard/>  
          <ShoppingCard />  
          <p>Subtotal</p>
          <h2 className={styles.totalAmount}>$319.980</h2>
          <div className={styles.buttonPanel}>
            <button className="button button--primary">Ir a carrito</button>
            <button className="button button-link button-link--primary">Seguir comprando</button>
          </div>
          <h4>Productos que podrían interesarte</h4>
          <div className={styles.productsRow}>
            {
              products.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default SideBarShoppingCart;