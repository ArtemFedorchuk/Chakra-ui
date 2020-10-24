import React from 'react';
import Button from '@chakra-ui/core/dist/Button';

import { GiFlame, GiInterdiction } from "react-icons/gi";

import styles from './styles.module.scss'


const ButtonGroup = () => {
  return (
    <div className={styles.buttonGroup}>
      <Button
        variantColor="blue"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        leftIcon={ GiFlame }
        variant="outline"
        className={styles.btnStart}
      >
        Start
      </Button>

      <Button
        variantColor="red"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        variant="outline"
        leftIcon={ GiInterdiction }
      >
        Stop
      </Button>
    </div>
  )
};

export default ButtonGroup;
