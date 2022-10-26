import React from "react"
import BrowserMenu from "../BrowserMenu/BrowserMenu"
import Footer from '../Footer/Footer'
// import styles from './Layout.module.scss'

export default function Layout({children}) {
  return (
    <React.Fragment>
      <BrowserMenu/>
      <div>
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}