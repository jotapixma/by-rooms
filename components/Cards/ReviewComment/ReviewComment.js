import React from 'react';
// import Image from 'next/image';
import { printStars } from '../../../utils/utils'
import { htmlConverter } from '../../../utils/utils'
import styles from './ReviewComment.module.scss';

const ReviewComment = ({review}) => {

  return (  
    <article className={styles.cardComment}>
      <div className={styles.cardComment__rank}>
        {printStars(review.valoration)}
      </div>
      <div className={styles.cardComment__description}  dangerouslySetInnerHTML={htmlConverter(review.description)}></div>
      <h3>Logo</h3>
      {/* <figure>
        <Image src={review.image} width={80} height={40} layout="intrinsic" alt="review profile" />
      </figure> */}
    </article>
  );
}
 
export default ReviewComment;