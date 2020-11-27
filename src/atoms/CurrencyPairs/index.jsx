import React, { useState } from 'react';
import Select from '@chakra-ui/core/dist/Select';
import {useStore} from 'effector-react';
import {
  currencyPairsEvent,
  currencyPairsStore,
  sellOffEvent,
  startEvent,
  stopEvent
} from '../../store';

import styles from './styles.module.scss';

const CurrencyPairs = () => {
  const [ disable, setDisable ] = useState(false);
  const currencyStore = useStore(currencyPairsStore);

  startEvent.watch(() => setDisable(true));
  stopEvent.watch(() => setDisable(false));
  sellOffEvent.watch(() => setDisable(false));

  const handleSelect = (e) => {
    currencyPairsEvent(e.target.value)
  }

  return (
    <div className={styles.wrapperCurrencyInput}>
      <p className={styles.currencyTitle}>Currency pairs</p>
      <Select
        isInvalid={!currencyStore}
        isDisabled={disable}
        placeholder="Pairs"
        size="sm"
        className={styles.selectItem}
        onChange={handleSelect}
      >
        <option value="BTC/BNB">BTC/BNB</option>
        <option value="BNB/USDT">BNB/USDT</option>
        <option value="ETH/BNB">ETH/BNB</option>
        <option value="ETH/USDT">ETH/USDT</option>
        <option value="ETH/BTC">ETH/BTC</option>
      </Select>
      {!currencyStore && (
        <p className={styles.errText}>Add currency pairs!</p>
      )}
    </div>
  )
};

export default CurrencyPairs;