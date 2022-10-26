import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './OnlyImgCard.module.scss'

const OnlyImgCard = ({item}) => {
  return (  
    <Link href="#">
      <a>
        <article className={styles.cardContainer}>
          <figure className={styles.cardContainer__mask}>
            <Image src={item.image} width={560} height={460} layout="intrinsic" alt={item.title} />
          </figure>
        </article>
      </a>
    </Link>
  );
}
 
export default OnlyImgCard;