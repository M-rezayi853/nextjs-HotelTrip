import React from 'react'

import Header from './header'
import Sidebar from './sidebar'
import styles from './layout.module.scss'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Sidebar />

        <main className={styles.hotelView}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
