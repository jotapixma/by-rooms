import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './OrderSummaryCard.module.scss';

const OrderSummaryCard = ({item}) => {

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const AddProduct = () => {
    setQuantity(quantity + 1)
  }

  const RemoveProduct = () => {
    setQuantity(quantity - 1)
  }


  return (  
   <article className={styles.orderCard}>
      <div className={styles.bodyBox}>
        <div className={styles.bodyBox__textSide}> 
          <h6 className={styles.title} >Trotadora eléctrica E100</h6>
          <h4 className={styles.amount}>$159.990</h4>
          <div className={styles.inputControls}>
            <button onClick={RemoveProduct} type="button" className={styles.buttonControl}>-</button>
            <input 
              type="text" 
              value={quantity} 
              onChange={handleChangeQuantity}
              className={styles.customInput}
            />
            <button onClick={AddProduct} type="button" className={styles.buttonControl}>+</button>
          </div>
        </div>
        <div className={styles.bodyBox__imgSide}> 
          <figure className={styles.imgMask}>
            <Image src={item.image} width={95} height={85} layout="intrinsic" alt={item.title} />
          </figure>
        </div>
      </div>
   </article>
  );
}
 
export default OrderSummaryCard;