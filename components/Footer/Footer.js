import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
// import RrssPanel from './RrssPanel/RrssPanel';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link'
import styles from './Footer.module.scss'
import FooterWinch from './FooterWinch/FooterWinch';

export default function Footer() {

  let data = [
    {
      "id": 1,
      "image": "https://picsum.photos/560/460",
      "rrss": [
        {
          "name": 'facebook',
          "icon": '<WhatsAppIcon/>',
        },
        {
          "name": 'instagram',
          "icon": '<WhatsAppIcon/>',
        }
      ]
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className="bootstrap-container">
          <Grid container>
            <Grid item xs={12} md={6}>
              <p>Suscribete para conocer todos nuestros eventos, lanzamientos y novedades.</p>
              <div className={styles.formRow}>
                <input className={styles.customInput} type="text" />
                <button className="button button--primary">Suscribir</button>
              </div>
              <p>Síguenos en redes sociales</p>
              <div className={styles.rrssRow}>
                <Link href="">
                  <a>
                    <InstagramIcon />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <WhatsAppIcon />
                  </a>
                </Link>
              </div>
              {/* <RrssPanel data={data}/> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.gridLists}>
                <ul className={styles.unorderList}>Colecciones
                  <li>Rooms Outdoor</li>
                  <li>Rooms Summer</li>
                </ul>
                <ul className={styles.unorderList}>Información
                  <li>Shop</li>
                  <li>Conocenos</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="bootstrap-container__fluid">
          <FooterWinch/>
        </div>
      </Container>

    </footer>
  )
}

{/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */}