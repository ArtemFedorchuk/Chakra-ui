import React from 'react';
import styles from './styles.module.scss'
import {useStore} from 'effector-react';
import {MessagesStore} from '../../store';

const MessageBox = () => {

  const messagesStore = useStore(MessagesStore)

  return (
    <div className={styles.messageBoxWrapper}>
      <p className={styles.messageBoxTitle}>Operations block</p>
      {messagesStore.map((message, id) => (
        message.buy ? (
          <div
            key={id}
            className={styles.cardWrapper}
          >
            <span className={styles.numberCard}>{messagesStore.length - id}</span>
            <div className={styles.rightCardContent}>
              <div className={styles.buyCircle}>BUY</div>
              <div>
                <p>Price: ${message.price}</p>
              </div>
            </div>
            <div>
              <p>{message.time}</p>
            </div>
          </div>
        ):
          message.sell ? (
          <div
            key={id}
            className={styles.cardWrapper}
          >
            <span className={styles.numberCard}>{messagesStore.length - id}</span>
            <div className={styles.rightCardContent}>
              <div className={styles.sellCircle}>SELL</div>
              <div className={styles.infoWrapper}>
                <p>Profit: ${message.profit}</p>
                <p>Sell price: ${message.sellPrice}</p>
              </div>
            </div>
            <div>
              <p>{message.time}</p>
            </div>
          </div>
        ): false
      ))}
    </div>
  )
};

export default MessageBox;