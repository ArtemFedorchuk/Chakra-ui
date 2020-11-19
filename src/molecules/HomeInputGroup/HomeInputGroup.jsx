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
import { useInputData } from '../../contexts/data-input-context/DataInputContext';
import {useMainButtonData} from '../../contexts/main-button-context/MainButtonContext';

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

  // eslint-disable-next-line no-unused-vars
  const { data, setValues } = useInputData();
  const { dataButton } = useMainButtonData()


  console.log('data ->', data );

  //inputs change
  // eslint-disable-next-line no-unused-vars
  const [ walletVolumeNumber, setWalletVolumeNumber ] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [ takerCommissionNumber, setTakerCommissionNumber ] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [ takerUsdNumber, setTakerUsdNumber ] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [ stopLossNumber, setStopLossNumber ] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [ buyNextNumber, setBuyNextNumber ] = useState(0);

  // console.log('walletVolumeNumber ->', walletVolumeNumber );
  // console.log('takerCommissionNumber ->', takerCommissionNumber );
  // console.log('takerUsdNumber ->', takerUsdNumber );
  // console.log('stopLossNumber ->', stopLossNumber );
  // console.log('buyNextNumber ->', buyNextNumber );

  const changeInput = (e) => {
    switch (e.target.id) {
      case '1' : {
       setWalletVolumeNumber(e.target.value);
       setValues({
         volumeNumber: Number(e.target.value)
       });
       return
      }
      case '2' : {
       setTakerCommissionNumber(e.target.value);
        setValues({
          takerCommissionNumber: Number(e.target.value)
        });
        return
      }
      case '3' : {
       setTakerUsdNumber(e.target.value);
        setValues({
          takerUsdNumber: Number(e.target.value)
        });
        return
      }
      case '4' : {
       setStopLossNumber(e.target.value);
        setValues({
          stopLossNumber: Number(e.target.value)
        });
        return
      }
      case '5' : {
       setBuyNextNumber(e.target.value);
        setValues({
          buyNextNumber: Number(e.target.value)
        });
        return
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
                    dataButton.startButton ? true :
                    dataButton.stopButton ? false : false
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
