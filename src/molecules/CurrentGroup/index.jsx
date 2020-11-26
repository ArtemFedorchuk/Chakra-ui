import React, {useEffect, useRef, useState} from 'react';
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/core';
import {useStore} from 'effector-react';
import {
  currentPriceInpValueEvent,
  CurrentPriceStore,
  CurrentStopLossStore,
  NextBuyAtStore,
  SafetyStore
} from '../../store';

import styles from './styles.module.scss'


const CurrentGroup = () => {
  const inpRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [customBg, setCustomBg] = useState('')
  const currentPrice = useStore(CurrentPriceStore)
  const safetyValue = useStore(SafetyStore)
  const currentStopLoss = useStore(CurrentStopLossStore)
  const nextBuyAt = useStore(NextBuyAtStore)

  const safetyValueFloat = Number(parseFloat(safetyValue).toFixed(2))
  const currentStopLossFloat = currentStopLoss.toFixed(2);
  const nextBuyAtFloat = nextBuyAt.toFixed(2);

  useEffect(() => {
    const currentPriceInpValue = inpRef.current.value;

    currentPriceInpValueEvent(currentPriceInpValue)
  })

  // if (currentPrice.price > currentPrice.prevPrice) {
  //   setCustomBg('green')
  // } else if (currentPrice.price === currentPrice.prevPrice) {
  //   setCustomBg('lime')
  // } else {
  //   setCustomBg('red')
  // }

  return (
    <div className={styles.wrapperCounter}>
      <StatGroup>
        <Stat className={styles.firstCurrentItem} style={{background: `transparent`}}>
          <StatLabel>Current price</StatLabel>
          <StatNumber>
            <span>
                <input
                  ref={inpRef}
                  disabled={true}
                  value={!currentPrice.price ? 0 : currentPrice.price}
                  className={styles.currentInput}
                />
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.secondCurrentItem}>
          <StatLabel>Current stop loss</StatLabel>
          <StatNumber>
            <span>
              {currentStopLoss > 0 ? currentStopLossFloat : 0}
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.threeCurrentItem}>
          <StatLabel>Next buy at</StatLabel>
          <StatNumber>
            <span>
              {nextBuyAt > 0 ? nextBuyAtFloat : 0}
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.lastCounter}>
          <StatLabel>Safely line value</StatLabel>
          <StatNumber>
            <span>
              {safetyValueFloat}
            </span>
          </StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}

export default CurrentGroup;