import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './BrandCard.module.scss'

const BrandCard = ({brand}) => {
  return (
    <Link href="#">
      <a>
        <article className={styles.brandCard}>
          <figure>
            <Image src={brand.image} width={150} height={142} layout="responsive" alt="product" />
          </figure>
        </article>
      </a>
    </Link>
  );
}
 
export default BrandCard;