import React from 'react'
import Image from 'next/image'

import IconMagnifying from '../../public/images/SVG/magnifying-glass.svg'
import IconBookmark from '../../public/images/SVG/bookmark.svg'
import IconChat from '../../public/images/SVG/chat.svg'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src='/images/logo.png'
          alt='hotelTrip logo'
          width={50}
          height={50}
        />
      </div>

      <form action='#' className={styles.search}>
        <input
          type='text'
          className={styles.input}
          placeholder='Search hotels'
        />
        <button className={styles.button}>
          <IconMagnifying className={styles.icon} />
        </button>
      </form>

      <nav className={styles.userNav}>
        <div className={styles.iconBox}>
          <IconBookmark className={styles.icon} />
          <span className={styles.notification}>7</span>
        </div>

        <div className={styles.iconBox}>
          <IconChat className={styles.icon} />
          <span className={styles.notification}>13</span>
        </div>

        <div className={styles.user}>
          <div className={styles.userPhoto}>
            <Image
              src='/images/user.png'
              alt='User photo'
              width={40}
              height={40}
            />
          </div>
          <span className={styles.userName}>Song Joong-ki</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
