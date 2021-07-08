import React from 'react'

import IconStar from '../../public/images/SVG/star.svg'
import IconLocation from '../../public/images/SVG/location-pin.svg'
import styles from './overview.module.scss'

function Overview() {
  return (
    <div className={styles.overview}>
      <h1 className={styles.heading}>Hotel Las Palmas</h1>
      <div className={styles.stars}>
        <IconStar className={styles.iconStar} />
        <IconStar className={styles.iconStar} />
        <IconStar className={styles.iconStar} />
        <IconStar className={styles.iconStar} />
        <IconStar className={styles.iconStar} />
      </div>

      <div className={styles.location}>
        <IconLocation className={styles.iconLocation} />
        <button className='btn-inline'>Albufeira, Portugal</button>
      </div>

      <div className={styles.rating}>
        <div className={styles.ratingAverage}>8.6</div>
        <div className={styles.ratingCount}>429 votes</div>
      </div>
    </div>
  )
}

export default Overview
