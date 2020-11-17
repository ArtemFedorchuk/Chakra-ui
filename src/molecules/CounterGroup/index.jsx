import React from 'react';
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/core';

import styles from './styles.module.scss'

const CounterGroup = () => {
  return (
    <div className={styles.wrapperCounter}>
      <StatGroup>
        <Stat className={styles.firstCounter}>
          <StatLabel>Profit counter</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>

        <Stat className={styles.centerCounter}>
          <StatLabel>Loss counter</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>

        <Stat className={styles.lastCounter}>
          <StatLabel>Total</StatLabel>
          <StatNumber>45</StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}

export default CounterGroup;