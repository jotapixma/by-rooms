import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './FooterWinch.module.scss'

const FooterWinch = () => {
  return (  
    <div className={styles.footerWinch}> 
      <div className={styles.footerWinch__info}>
        <figure>
          <Image src="/logo-rooms.png" width={96} height={50} layout="intrinsic" alt="Ultimate Logo footer"/>
        </figure>
        <Link href="">
          <a>Avisos de privacidad</a>
        </Link>
        <Link href="">
          <a>Términos y condiciones</a>
        </Link>
      </div>
      <div className={styles.footerWinch__rights}>
        <span className={styles.textBrand}>Rooms 2023 © Todos los derechos reservados</span>
      </div>
    </div>
  );
}
 
export default FooterWinch;