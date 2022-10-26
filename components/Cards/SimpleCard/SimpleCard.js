import React from 'react';
import Image from 'next/image';
import styles from './SimpleCard.module.scss';

const SimpleCard = ({item}) => {
  return (  
    <article className={styles.simpleCard}>
      <figure className={styles.simpleCard__mask}>
        <Image src={item.image} width={21} height={25} layout="intrinsic" alt={item.title} />
      </figure>
      <h4 className={styles.simpleCard__title}>{item.title}</h4>
      <p className={styles.simpleCard__description}>{item.description}</p>
    </article>
  );
}
 
export default SimpleCard;