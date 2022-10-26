import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './CategoryCard.module.scss'

const CategoryCard = ({category}) => {

  return (  
    <React.Fragment>
      {category && 
        <Link href="#">
          <a>
            <article className={styles.categoryCard}>
              <figure className={styles.categoryCard__img}>
                <Image className="zoom-img" src={category.image} width={330} height={386} layout="responsive" alt="Ultimate Logo cat card" />
              </figure>
              <div className={styles.categoryCard__boxTitle}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
            </article>
          </a>
        </Link>
      }
    </React.Fragment>
  );
}
 
export default CategoryCard;