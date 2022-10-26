import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './ComplementPurchase.module.scss'

const ComplementPurchase = ({ product }) => {
  return (  
    <Link href="#">
      <a>
        <article className={styles.complementCard}>
          <figure className={styles.complementCard__image}>
            {/* <img src={product.image_complement} class="img-responsive" alt="complementa" /> */}
            <Image src={product.image_complement} width={260} height={405} layout="responsive" alt="review profile" />
          </figure>
          <div className={styles.complementCard__body}>
            <h4 className={styles.cardTitle}>Completa tu compra</h4>
            <div className={styles.panelButton}>
              <button className="button button--primary">Ver más</button>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}
 
export default ComplementPurchase;