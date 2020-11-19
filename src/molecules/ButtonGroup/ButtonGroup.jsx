import React from 'react';

import Button from '@chakra-ui/core/dist/Button';

import { GiFlame, GiInterdiction } from "react-icons/gi";

import styles from './styles.module.scss'
import {useMainButtonData} from '../../contexts/main-button-context/MainButtonContext';

const ButtonGroup = () => {
  const { dataButton, setButtonValues } = useMainButtonData()

  console.log('dataButton -> ', dataButton)

  const startHandler = () => {
    setButtonValues({
      startButton: true
    })
  }

  const stopHandler = () => {
    setButtonValues({
      startButton: false
    })
  }

  const sellOffHandler = () => {
    setButtonValues({
      sellOffButton: true
    })
  }

  // eslint-disable-next-line no-unused-vars
  const getUser = () => {
    const user = localStorage.getItem('user');
    console.log( 'user -> ',user );
  };

  return (
    <div className={styles.buttonGroup}>
      <Button
        onClick={startHandler}
        isDisabled={dataButton.startButton}
        variantColor="blue"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        leftIcon={ GiFlame }
        variant="outline"
        className={styles.btnStart}
        _hover={{ bg: "rgba(0,0,0, .1)", color: "#63b3ed" }}
      >
        Start
      </Button>

      <Button
        onClick={stopHandler}
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
        onClick={sellOffHandler}
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
