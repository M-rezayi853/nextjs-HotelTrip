import React from 'react'
import Link from 'next/link'

import IconHome from '../../public/images/SVG/home.svg'
import IconAircraft from '../../public/images/SVG/aircraft-take-off.svg'
import IconKey from '../../public/images/SVG/key.svg'
import IconMap from '../../public/images/SVG/map.svg'
import styles from './sidebar.module.scss'

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sideNav}>
        <li className={`${styles.item} ${styles.itemActive}`}>
          <Link href='/'>
            <a className={styles.link}>
              <IconHome className={styles.icon} />
              <span>Hotel</span>
            </a>
          </Link>
        </li>

        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>
              <IconAircraft className={styles.icon} />
              <span>Flight</span>
            </a>
          </Link>
        </li>

        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>
              <IconKey className={styles.icon} />
              <span>Car rental</span>
            </a>
          </Link>
        </li>

        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>
              <IconMap className={styles.icon} />
              <span>Tours</span>
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.legal}>
        &copy; 2020 by hotelTrip. All rights reserved.
      </div>
    </nav>
  )
}

export default Sidebar
