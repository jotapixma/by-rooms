import React from 'react';
import Image from 'next/image'
import styles from './HorizontalCard.module.scss'
import { htmlConverter } from '../../../utils/utils';

const HorizontalCard = ({item}) => {
  return (  
    <article className={styles.horizontalCard}>
      <figure className={styles.horizontalCard__mask}>
        <Image src={item.image} width={380} height={200} layout="responsive" alt="product" />
      </figure>
      <h3 className={styles.horizontalCard__title}>{item.title}</h3>
      <div dangerouslySetInnerHTML={htmlConverter(item.description)}></div>
    </article>
  );
}
 
export default HorizontalCard;