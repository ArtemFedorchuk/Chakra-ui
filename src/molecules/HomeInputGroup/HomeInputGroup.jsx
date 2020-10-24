import React from 'react';
import { InputLeftAddon } from '@chakra-ui/core';
import Stack from '@chakra-ui/core/dist/Stack';
import Input from '@chakra-ui/core/dist/Input';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import Checkbox from '@chakra-ui/core/dist/Checkbox';

import styles from './styles.module.scss'

const obj = [
  {
    id: 1,
    childrenName: 'Sec',
    placeholder: 'Seconds'
  },
  {
    id: 2,
    childrenName: 'Min',
    placeholder: 'Minutes'
  },
  {
    id: 3,
    childrenName: 'Hou',
    placeholder: 'Hours'
  },
];

const HomeInputGroup = () => {
  return (
    <div className={styles.inputGroup}>
        <Stack spacing={4}>
          {obj.map((item) => (
            <div className={styles.wrapperInput}>
              <InputGroup key={item.id}>
                <Checkbox variantColor="green" className={styles.customCheckbox} />
                <InputLeftAddon
                  className={styles.customInputDescription}
                  children={item.childrenName}
                />
                <Input
                  className={styles.customInput}
                  type="number"
                  focusBorderColor="pink.400"
                  roundedLeft="0"
                  placeholder={item.placeholder}

                />
              </InputGroup>
            </div>
          ))}
        </Stack>
    </div>
  )
};

export default HomeInputGroup;
