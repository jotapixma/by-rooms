import React from 'react';
import Link from 'next/link'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './BlogCard.module.scss'

const BlogCard = ({post,size}) => {
  return ( 
    <Link href="#">
      <a className={styles.blogCardContainer}>
        <article className={styles.blogCard}>          
          <figure className={`${styles.blogCard__imgMask} ${(size === 'small' ? styles.small : styles.default)}`}>
            <img src={post.image} className="img-responsive" alt={post.title} />
            <h3 className={styles.cardTitle}>{post.title}</h3>
          </figure>
          <div className={styles.blogCard__footer}>
            <span className={styles.fooText}>{post.date}</span>
            <FiberManualRecordIcon/>
            <div className={styles.tagsRow}>
              <span className={styles.fooText}>{post.tags}</span>
            </div>
          </div>
          <div className="default-link">
            Leer artículo
          </div>
          {/* <Link href="#1" >
            <a href="" className="default-link">Leer artículo</a>
          </Link> */}
        </article>
      </a>
    </Link>
   );
}
 
export default BlogCard;