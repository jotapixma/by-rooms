import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './ProductCard.module.scss';

const ProductCard = ({product}) => {

  return ( 
    <Link 
      href={{
        pathname: 'single-product',
        query: { id: product.id}, 
      }}
    >
      <a>
        <article className={styles.productCard}>
          <div className={styles.productCard__head}>

          </div>
          <figure className={styles.productCard__image}>
            <Image src={product.image} width={196} height={169} layout="intrinsic" alt={product.title} />
          </figure>
 
    
          <p className={styles.productCard__brandTitle}>{product.brand}</p>
          <h4 className={styles.productCard__title}>{product.title}</h4>

        </article>
      </a>
    </Link>
  );
}
 
export default ProductCard;