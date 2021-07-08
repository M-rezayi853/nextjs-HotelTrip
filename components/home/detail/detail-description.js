import React from 'react'
import Image from 'next/image'

import styles from './detail-description.module.scss'

function DetailDescription() {
  return (
    <div className='description'>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>

      <p className='paragraph'>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>Close to the beach</li>
        <li className={styles.item}>Breakfast included</li>
        <li className={styles.item}>Free airport shuttle</li>
        <li className={styles.item}>Free wifi in all rooms</li>
        <li className={styles.item}>Air conditioning and heating</li>
        <li className={styles.item}>Pets allowed</li>
        <li className={styles.item}>We speak all languages</li>
        <li className={styles.item}>Prefect for families</li>
      </ul>

      <div className={styles.recommend}>
        <p className={styles.count}>
          Lucy and 3 other friends recommend this hotel.
        </p>
        <div className='recommend__friends'>
          <span className={styles.photo}>
            <Image
              src='/images/user-3.jpg'
              alt='Friend 3'
              width={35}
              height={35}
            />
          </span>
          <span className={styles.photo}>
            <Image
              src='/images/user-4.jpg'
              alt='Friend 4'
              width={35}
              height={35}
            />
          </span>
          <span className={styles.photo}>
            <Image
              src='/images/user-5.jpg'
              alt='Friend 5'
              width={35}
              height={35}
            />
          </span>
          <span className={styles.photo}>
            <Image
              src='/images/user-6.jpg'
              alt='Friend 6'
              width={35}
              height={35}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default DetailDescription
