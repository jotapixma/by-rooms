import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './CollectionCard.module.scss'

const CollectionCard = ({ data }) => {
  const item = data.featured_item[0]

  // console.log('data:', data);

  return (
    <Link href="#">
      <a>
        <article className={styles.collectionCard}>
          <div className={styles.bodyFit}>
            <figure className={styles.collectionCard__image}>
              <Image src={item.image} width={562} height={566} layout="intrinsic" alt={item.title} />
            </figure>
            <h4 className={`${styles.collectionCard__title} ${styles.w600}`}>{item.title}</h4>
            <p className={styles.collectionCard__title}>{item.brand}</p>
            <div className={styles.priceRow}>
              <h3 className={styles.priceRow__price}>${item.normal_price}</h3>
            </div>
            <button className="button button--outline">Ver Producto</button>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default CollectionCard;