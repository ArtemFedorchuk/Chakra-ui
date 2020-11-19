import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import { InputLeftElement, InputRightElement } from '@chakra-ui/core';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import styles from './styles.module.scss';
import Text from '@chakra-ui/core/dist/Text';

const Registration = () => {
  const [show, setShow] = React.useState(false);
  const [sendInfo, setSendInfo ] = useState(false);

  const handleShow = () => setShow(!show);

  const sendHandler = () => {
    setSendInfo(true)
  };

  return (
      <div className={styles.formWrapper}>
        <Stack spacing={3}>
          <Text fontSize="3xl">
            REGISTRATION CRYPT TOOL
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
                focusBorderColor="#2C7A7B"
              />
            </InputGroup>

            <InputGroup size="md">
              <Input
                className={styles.input}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                focusBorderColor="#2C7A7B"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShow}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
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
              <button onClick={sendHandler} type="button" className={styles.button}>Registration</button>
              )}
          </div>
        </form>

        <div className={styles.linkWrapper}>
          <Link to='/' className={styles.link}>
            LogIn
          </Link>
          <Link to='/forgot-password' className={styles.link}>
            Forgot password
          </Link>
        </div>
      </div>
  )
};

export default Registration;