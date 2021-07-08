import React from 'react'
import Image from 'next/image'

import styles from './detail-user-reviews.module.scss'

function DetailUserReviews() {
  return (
    <div className={styles.userReviews}>
      <figure className={styles.review}>
        <blockquote className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption className={styles.user}>
          <div className={styles.photo}>
            <Image
              src='/images/user-1.png'
              alt='User 1'
              width={45}
              height={45}
            />
          </div>
          <div className={styles.userBox}>
            <p className={styles.userName}>Kim So-eun</p>
            <p className={styles.userDate}>Feb 23rd, 2020</p>
          </div>
          <div className={styles.rating}>7.8</div>
        </figcaption>
      </figure>

      <figure className={styles.review}>
        <blockquote className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi.
        </blockquote>
        <figcaption className={styles.user}>
          <div className={styles.photo}>
            <Image 
              src='/images/user-2.png' 
              alt='User 2' 
              width={45} 
              height={45} 
            />
          </div>
          <div className={styles.userBox}>
            <p className={styles.userName}>Han Hyo-joo</p>
            <p className={styles.userDate}>Sept 13th, 2020</p>
          </div>
          <div className={styles.rating}>9.3</div>
        </figcaption>
      </figure>

      <button className='btn-inline'>
        Show all <span>&rarr;</span>
      </button>
    </div>
  )
}

export default DetailUserReviews
