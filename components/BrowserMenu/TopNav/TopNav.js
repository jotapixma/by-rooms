import React, { useState } from 'react';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SearchBar from "../SearchBar/SearchBar"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SideBarShoppingCart from '../../SideBarShoppingCart/SideBarShoppingCart';
import Link from 'next/link'
import styles from './TopNav.module.scss'

export default function TopNav() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <section className={styles.topNav}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="nowrap"
        >
          <Link href="/">
            <a>
              <figure className={styles.imgContainer}>
                <Image src='/logo-rooms.png' width={146} height={100} layout="intrinsic"></Image>
              </figure>
            </a>
          </Link>
          <div className={styles.listItemsContainer}>
            <ul className={styles.listItems}>
              <li className={styles.active}>
                <a href="" rel="noreferrer">Shop</a>
              </li>
              <li>
                <Link href="faqs">
                  <a rel="noreferrer">Faqs</a>
                </Link>
              </li>
              <li>
                <Link href="knowus">
                  <a rel="noreferrer">Conocenos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.shoppingContainer}>
            <SearchBar/>
            <PersonOutlineOutlinedIcon/>
            <ShoppingCartOutlinedIcon className={styles.cartIcon} onClick={toggleSideBar} />
          </div>
        </Grid>
      </Container>

      <div className={(showSideBar ? styles.showMask : styles.noShowMask)} onClick={() => (setShowSideBar(false))}></div>
      
      <div className={`${styles.shoppingCart} ${showSideBar ? styles.showSideBar : styles.noShow}`}>
        <SideBarShoppingCart toggleSideBar={toggleSideBar}/>
      </div>

    </section>
  )
}