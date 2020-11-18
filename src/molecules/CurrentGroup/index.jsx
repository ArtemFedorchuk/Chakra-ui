import React from 'react';
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/core';

import styles from './styles.module.scss'

const CurrentGroup = () => {
  return (
    <div className={styles.wrapperCounter}>
      <StatGroup>
        <Stat className={styles.firstCurrentItem}>
          <StatLabel>Current price</StatLabel>
          <StatNumber>
            <span>
                456.1
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.secondCurrentItem}>
          <StatLabel>Current stop loss</StatLabel>
          <StatNumber>
            <span>
              345.4
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.threeCurrentItem}>
          <StatLabel>Next buy at</StatLabel>
          <StatNumber>
            <span>
              5.4
            </span>
          </StatNumber>
        </Stat>

        <Stat className={styles.lastCounter}>
          <StatLabel>Safely line value</StatLabel>
          <StatNumber>
            <span>
              12547
            </span>
          </StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}

export default CurrentGroup;