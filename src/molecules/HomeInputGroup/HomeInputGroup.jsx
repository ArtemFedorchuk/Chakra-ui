import React, { useState } from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/core';

import Stack from '@chakra-ui/core/dist/Stack';

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

  //inputs change
  const [ walletVolumeNumber, setWalletVolumeNumber ] = useState(0);
  const [ takerCommissionNumber, setTakerCommissionNumber ] = useState(0);
  const [ takerUsdNumber, setTakerUsdNumber ] = useState(0);
  const [ stopLossNumber, setStopLossNumber ] = useState(0);
  const [ buyNextNumber, setBuyNextNumber ] = useState(0);

  console.log('walletVolumeNumber ->', walletVolumeNumber );
  console.log('takerCommissionNumber ->', takerCommissionNumber );
  console.log('takerUsdNumber ->', takerUsdNumber );
  console.log('stopLossNumber ->', stopLossNumber );
  console.log('buyNextNumber ->', buyNextNumber );

  const changeInput = (e) => {
    switch (e.target.id) {
      case '1' : {
       return setWalletVolumeNumber(e.target.value)
      }
      case '2' : {
       return setTakerCommissionNumber(e.target.value)
      }
      case '3' : {
       return setTakerUsdNumber(e.target.value)
      }
      case '4' : {
       return setStopLossNumber(e.target.value)
      }
      case '5' : {
       return setBuyNextNumber(e.target.value)
      }

      default: {
        return e.target.value
      }
    }
  }

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
                <NumberInput defaultValue={0} size="sm"  min={item.minValue}>
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
