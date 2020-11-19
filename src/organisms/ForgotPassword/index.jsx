import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import { InputLeftElement } from '@chakra-ui/core';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import styles from './styles.module.scss';
import Text from '@chakra-ui/core/dist/Text';

const ForgotPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [ login, setLogin ] = useState();
  const [sendInfo, setSendInfo ] = useState(false);


  const emailHandler = (e) => {
    setLogin(e.target.value)
  };

  const sendHandler = () => {
    setSendInfo(true)
  };

  return (
    <div className={styles.formWrapper}>
      <Stack spacing={3}>
        <Text fontSize="3xl">
          FORGOT PASSWORD?
        </Text>
      </Stack>
      <form action='' className={styles.form}>
        <Stack spacing={6}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiAtSymbol color="gray.300" />}
            />
            <Input
              type="email"
              placeholder="Email"
              onChange={emailHandler}
              focusBorderColor="#2C7A7B"
            />
          </InputGroup>
        </Stack>
        <br/>
        <div className={styles.btnGroup}>
          {sendInfo ? (
            <Button
              className={styles.buttonSpinner}
              isLoading
              loadingText="Submitting"
              colorScheme="pink"
              variant="outline"
              variantColor='teal.500'
            >
              Submit
            </Button>
          ) : (
            <button onClick={sendHandler} type="button" className={styles.button}>Reset password</button>

          )}
        </div>
      </form>
      <div className={styles.linkWrapper}>
        <Link to='/registration' className={styles.link}>
          Registration
        </Link>
        <Link to='/' className={styles.link}>
          LogIn
        </Link>
      </div>
    </div>
  )
};

export default ForgotPassword;