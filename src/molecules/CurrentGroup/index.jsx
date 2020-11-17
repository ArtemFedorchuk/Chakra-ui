import React from 'react';
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/core';

import styles from './styles.module.scss'
import Text from '@chakra-ui/core/dist/Text';

const CurrentGroup = () => {
  return (
    <div className={styles.wrapperCounter}>
      <StatGroup>
        <Stat className={styles.firstCurrentItem}>
          <StatLabel>Current price</StatLabel>
          <StatNumber>
            <Text color="gray.400" fontSize="18px">
              456.1
            </Text>
          </StatNumber>
        </Stat>

        <Stat className={styles.secondCurrentItem}>
          <StatLabel>Current stop loss</StatLabel>
          <StatNumber>
            <Text color="gray.400" fontSize="18px">
              345.4
            </Text>
          </StatNumber>
        </Stat>

        <Stat className={styles.threeCurrentItem}>
          <StatLabel>Next buy at</StatLabel>
          <StatNumber>
            <Text color="gray.400" fontSize="18px">
              45
            </Text>
          </StatNumber>
        </Stat>

        <Stat className={styles.lastCounter}>
          <StatLabel>Safely line value</StatLabel>
          <StatNumber>
            <Text color="gray.400" fontSize="18px">
             999.45
            </Text>
          </StatNumber>
        </Stat>
      </StatGroup>
    </div>
  )
}

export default CurrentGroup;