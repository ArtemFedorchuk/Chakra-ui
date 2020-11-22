import React from 'react';
import {useStore} from 'effector-react'

import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/core';

import Stack from '@chakra-ui/core/dist/Stack';

import {
  buyNextEvent,
  mainButtonStateStore,
  stopLossEvent,
  takerCommissionEvent,
  takerUsdEvent,
  walletEvent
} from '../../store';

import styles from './styles.module.scss'


const obj = [
  {
    id: 1,
    label: 'Wallet volume in %',
    defaultValue: '0',
    minValue: '0'
  },
  {
    id: 2,
    label: 'Taker commission in %',
    defaultValue: '0',
    minValue: '0'
  },
  {
    id: 3,
    label: 'Taker USD for Safety zone',
    defaultValue: '0',
    minValue: '0'
  },
  {
    id: 4,
    label: 'Stop loss',
    defaultValue: '0',
    minValue: '0'
  },
  {
    id: 5,
    label: 'Buy next in percentage',
    defaultValue: '0',
    minValue: '0'
  },
];

const HomeInputGroup = () => {

  const stateMainButtons = useStore(mainButtonStateStore);

  console.log( 'inputs state-> ', stateMainButtons );


  const changeInput = (e) => {
    switch (e.target.id) {
      case '1' : {
        return walletEvent(e.target.value);
      }
      case '2' : {
        return takerCommissionEvent(e.target.value);
      }
      case '3' : {
        return takerUsdEvent(e.target.value);
      }
      case '4' : {
        return stopLossEvent(e.target.value);
      }
      case '5' : {
        return buyNextEvent(e.target.value);
      }

      default: {
        return e.target.value
      }
    }
  };

  return (
      <Stack shouldWrapChildren direction="row">
          {obj.map((item) => (
            <div key={item.id} className={styles.inputItem}>
              <div>
                <h6>
                  {item.label}
                </h6>
              </div>
              <div>
                <NumberInput
                  isDisabled={
                    stateMainButtons.startButton
                  }
                  defaultValue={0}
                  size="sm"
                  min={item.minValue}
                >
                  <NumberInputField
                    placeholder="0"
                    id={item.id}
                    onChange={changeInput}
                    onBlur={changeInput}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </div>
          ))}
      </Stack>
  )
};

export default HomeInputGroup;
