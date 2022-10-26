import React from 'react';
import Image from 'next/image';
import { htmlConverter } from '../../../utils/utils';
import styles from './ReviewProfile.module.scss';

const ReviewProfile = ({review}) => {
  
  return (  
    <article className={styles.cardProfile}>
      <figure className={styles.cardProfile__mask}>
        <Image src={review.image} width={200} height={204} layout="intrinsic" alt="review profile" />
      </figure>
      <div className={styles.cardProfile__head}>
        <h3 className={styles.name}>{review.title}</h3>
        <h4 className={styles.position}>{review.subtitle}</h4>
      </div>
      <div className={styles.cardProfile__description} dangerouslySetInnerHTML={htmlConverter(review.description)}></div>
    </article>
  );
}
 
export default ReviewProfile;