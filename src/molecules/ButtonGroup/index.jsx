import React, {useState} from 'react';
import Button from '@chakra-ui/core/dist/Button';
import { GiFlame, GiInterdiction } from "react-icons/gi";
import { useStore } from 'effector-react';
import {
  currencyPairsStore,
  sellOffEvent,
  startEvent,
  stopEvent
} from '../../store';

import styles from './styles.module.scss'

const ButtonGroup = () => {
  const [ disabled, setDisabled ] = useState(false)
  const currencyStore = useStore(currencyPairsStore);

  startEvent.watch(() => setDisabled(true));
  stopEvent.watch(() => setDisabled(false));
  sellOffEvent.watch(() => setDisabled(false));

  const handleClickStart = () => {
    return !currencyStore ? false : startEvent(true)
  }

  return (
    <div className={styles.buttonGroup}>
      <Button
        onClick={handleClickStart}
        isDisabled={disabled}
        variantColor="green"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        leftIcon={ GiFlame }
        variant="outline"
        className={styles.btnStart}
        _hover={{ bg: "rgba(0,0,0, .1)", color: "#2F855A" }}
      >
        Start
      </Button>

      <Button
        onClick={() => stopEvent(false)}
        variantColor="red"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        variant="outline"
        leftIcon={ GiInterdiction }
        _hover={{ bg: "rgba(0,0,0, .1)", color: "#f56565" }}
      >
        Stop
      </Button>

      <Button
        onClick={() => sellOffEvent(true)}
        className={styles.buttonStop}
        size="md"
        height="48px"
        width="200px"
        variant="outline"
        leftIcon={ GiInterdiction }
        _hover={{ bg: "rgba(0,0,0, .1)" }}
      >
        Sell now & off
      </Button>

    </div>
  )
};

export default ButtonGroup;
