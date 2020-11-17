import React, { useReducer } from 'react';

import Button from '@chakra-ui/core/dist/Button';

import { GiFlame, GiInterdiction } from "react-icons/gi";

import styles from './styles.module.scss'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

const ButtonGroup = () => {

  const reducer = (state, action) => {
    switch(action.type) {
      case ACTIONS.INCREMENT:
        return {count: state.count + 1};
      case ACTIONS.DECREMENT:
        return {count: state.count - 1};
      default:
        return state

    }
  };

  // eslint-disable-next-line no-unused-vars
  const [ state, dispatch ] = useReducer(reducer, {count: 0});

  // eslint-disable-next-line no-unused-vars
  const getUser = () => {
    const user = localStorage.getItem('user');
    console.log( 'user -> ',user );
  };

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT})
    };

  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
  };

  return (
    <div className={styles.buttonGroup}>
      <Button
        onClick={increment}
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
        onClick={decrement}
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
