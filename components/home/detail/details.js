import React from 'react'

import DetailDescription from './detail-description'
import DetailUserReviews from './detail-user-reviews'
import styles from './details.module.scss'

function Detail() {
  return (
    <div className={styles.detail}>
      <DetailDescription />

      <DetailUserReviews />
    </div>
  )
}

export default Detail
