import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './FooterWinch.module.scss'

const FooterWinch = () => {
  return (  
    <div className={styles.footerWinch}> 
      <div className={styles.footerWinch__info}>
        <figure>
          <Image src="/logo-footer.svg" width={162} height={25} layout="intrinsic" alt="Ultimate Logo footer"/>
        </figure>
        <Link href="">
          <a>Avisos de privacidad</a>
        </Link>
        <Link href="">
          <a>Términos y condiciones</a>
        </Link>
        <Link href="">
          <a>Lorem Ipsum</a>
        </Link>
      </div>
      <div className={styles.footerWinch__rights}>
        <span className={styles.textBrand}>Ultimate 2022 © Todos los derechos reservados</span>
      </div>
    </div>
  );
}
 
export default FooterWinch;