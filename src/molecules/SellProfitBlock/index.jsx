import React from 'react';
import styles from './styles.module.scss'

const SellProfitBlock = () => {
  return (
    <div className={styles.sellProfitBockWrapper}>
      <div className={styles.sellProfitBock}>
        <p className={styles.sellProfitBockTitle}>
          Profit/Loss in %
        </p>
          <input
            className={styles.sellProfitBockInput}
            type='number'
            disabled={true}
            defaultValue={0}

          />
      </div>

      <div className={styles.sellProfitBock}>
        <p className={styles.sellProfitBockTitle}>
          Profit/Loss in $
        </p>
          <input
            className={styles.sellProfitBockInput}
            type='number'
            disabled={true}
            defaultValue={0}

          />
      </div>
    </div>
  )
};

export default SellProfitBlock;