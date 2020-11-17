import React from 'react';
import styles from './styles.module.scss'

const MessageBox = () => {
  return (
    <div className={styles.messageBoxWrapper}>
      <p className={styles.messageBoxTitle}>Sell and buy block</p>
      <div className={styles.cardWrapper}>
        <div className={styles.rightCardContent}>
          <div className={styles.buyCircle}>BUY</div>
          <div>
            <p>Profit: $4.97</p>
          </div>
        </div>
        <div>
          <p>2:12:56 PM</p>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.rightCardContent}>
          <div className={styles.sellCircle}>Sell</div>
          <div>
            <p>Profit: $4.97</p>
          </div>
        </div>
        <div>
          <p>2:12:56 PM</p>
        </div>
      </div>
    </div>
  )
};

export default MessageBox;