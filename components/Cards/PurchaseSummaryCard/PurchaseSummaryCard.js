import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './PurchaseSummaryCard.module.scss';

const OrderSummaryCard = ({ item }) => {

  return (
    <article className={styles.orderCard}>
      <div className={styles.bodyBox}>
        <div className={styles.bodyBox__imgSide}>
          <figure className={styles.imgMask}>
            <Image src={item.image} width={95} height={85} layout="intrinsic" alt={item.title} />
          </figure>
        </div>
        <div className={styles.bodyBox__textSide}>
          <p className={styles.title}>{item.title}</p>
          <span className={styles.sku}>SKU: 12345678</span>
        </div>
        <div className={styles.bodyBox__amountSide}>
          <h4 className={styles.amount}>$159.990</h4>
        </div>
  
      </div>
    </article>
  );
}

export default OrderSummaryCard;