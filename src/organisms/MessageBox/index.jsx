import React, {useState} from 'react';
import styles from './styles.module.scss'

const messages = [
  {
    id: 6,
    sell: true,
    profit: -94.27,
    sellPrice: 16969.72,
    time: '2:12:40 PM'
  },
  {
    id: 5,
    buy: true,
    price: 16961.70,
    time: '2:12:32 PM'
  },
  {
    id: 4,
    sell: true,
    profit: -44.27,
    sellPrice: 16969.72,
    time: '2:12:40 PM'
  },
  {
    id: 3,
    buy: true,
    price: 16961.70,
    time: '2:12:32 PM'
  },
  {
    id: 2,
    sell: true,
    profit: -34.27,
    sellPrice: 16969.72,
    time: '2:12:40 PM'
  },
  {
    id: 1,
    buy: true,
    price: 16451.1,
    time: '2:12:33 PM'
  },
]

const MessageBox = () => {
  const [items, setItem] = useState(messages)

  // set to arr new message
  // eslint-disable-next-line no-unused-vars
  const itemHandler = () => {
    setItem((prevState) => ([
      {
        id: prevState.length + 1,
        buy: true,
        price: 16961.70,
        time: 'test'
      },
      ...prevState
    ]))
  }
  return (
    <div className={styles.messageBoxWrapper}>
      <p className={styles.messageBoxTitle}>Sell and buy block</p>
      {items.map((message) => (
        message.buy ? (
          <div
            key={message.id}
            className={styles.cardWrapper}
          >
            <span className={styles.numberCard}>{message.id}</span>
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
            key={message.id}
            className={styles.cardWrapper}
          >
            <span className={styles.numberCard}>{message.id}</span>
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