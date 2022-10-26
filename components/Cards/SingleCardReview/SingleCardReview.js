import React, { useState, useEffect } from 'react';
import styles from './SingleCardReview.module.scss';
import { printStars } from '../../../utils/utils';

const SingleCardReview = ({item}) => {
  
  return ( 
    <article className={styles.reviewsCard}>
      <div className={styles.reviewsCard__stars}>{printStars(item.rating)}</div>
      <p className={styles.reviewsCard__description}>{item.text}</p>
      <h4 className={styles.reviewsCard__title}>{item.title}</h4>
    </article>
   );
}
 
export default SingleCardReview;