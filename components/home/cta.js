import React from 'react'

import styles from './cta.module.scss'

function Cta() {
  return (
    <div className={styles.cta}>
      <h2 className={styles.bookNow}>
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <button className='btn'>
        <span className='btn__visible'>Book now</span>
        <span className='btn__invisible'>Only 4 rooms left</span>
      </button>
    </div>
  )
}

export default Cta
