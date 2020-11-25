import React, {useEffect, useRef} from 'react';
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/core';
import {useStore} from 'effector-react';
import {
  LossCounterEvent,
  LossCounterStore,
  ProfitCounterEvent, ProfitCounterStore,
  ProfitsStore,
  TotalCounterEvent,
  TotalCounterStore
} from '../../store';

import styles from './styles.module.scss'

const CounterGroup = () => {
  const profitStore = useStore(ProfitsStore)
  const profitCounterNumber = useStore(ProfitCounterStore)
  const lossStoreNumber = useStore(LossCounterStore)
  const totalStoreNumber = useStore(TotalCounterStore)

  const profitNumber = Number(parseFloat(profitCounterNumber).toFixed(2));
  const lossNumber = Number(parseFloat(lossStoreNumber).toFixed(2));
  const totalNumber = Number(parseFloat(totalStoreNumber).toFixed(2));

  // console.log('profitStore => ', profitStore);

  const profitBox = useRef(null);
  const lossBox = useRef(null);

 useEffect(() => {
   const currentProfit = Number(parseFloat(profitStore).toFixed(2));
   const profitBoxValue = profitBox.current.value
   const lossBoxValue = lossBox.current.value

   if (currentProfit > 0) {
     // profitBox.value = Number(parseFloat(profitBox.value).toFixed(2)) + currentProfit;
     const profitNumber = profitBoxValue + currentProfit;
     ProfitCounterEvent(profitNumber)
   }
   else {
     // lossBox.value = Number(parseFloat(lossBox.value).toFixed(2)) - currentProfit;
     const lossNumber = lossBoxValue - currentProfit;
     // console.log('test => ', Number(parseFloat(profitBoxValue).toFixed(2)));
     // console.log('test2 => ', currentProfit);
     LossCounterEvent(lossNumber)
   }
   // totalBox.value = parseFloat(profitBox.value) - parseFloat(lossBox.value);
   const totalNumber = profitBoxValue - lossBoxValue
   TotalCounterEvent(totalNumber)
 },[profitStore])

  return (
    <div className={styles.wrapperCounter}>
      <StatGroup>
        <Stat className={styles.firstCounter}>
          <StatLabel>Profit counter</StatLabel>
          <StatNumber>
            <input
              ref={profitBox}
              value={profitNumber}
              disabled={true}
              className={styles.counterInput}
            />
          </StatNumber>
        </Stat>

        <Stat className={styles.centerCounter}>
          <StatLabel>Loss counter</StatLabel>
          <StatNumber>
            <input
              ref={lossBox}
              value={lossNumber}
              disabled={true}
              className={styles.counterInput}
            />
          </StatNumber>
        </Stat>

        <Stat className={styles.lastCounter}>
          <StatLabel>Total</StatLabel>
          <StatNumber><input
            value={totalNumber}
            disabled={true}
            className={styles.counterInput}
          /></StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}

export default CounterGroup;