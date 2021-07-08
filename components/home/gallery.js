import React from 'react'
import Image from 'next/image'

import styles from './gallery.module.scss'

function Gallery() {
  return (
    <div className={styles.gallery}>
      <figure className={styles.item}>
        <Image
          src='/images/hotel-1.jpg'
          alt='Photo of hotel 1'
          className={styles.photo}
          width={1000}
          height={600}
        />
      </figure>

      <figure className={styles.item}>
        <Image
          src='/images/hotel-2.jpg'
          alt='Photo of hotel 2'
          className={styles.photo}
          width={1000}
          height={600}
        />
      </figure>

      <figure className={styles.item}>
        <Image
          src='/images/hotel-3.jpg'
          alt='Photo of hotel 3'
          className={styles.photo}
          width={1000}
          height={600}
        />
      </figure>
    </div>
  )
}

export default Gallery
