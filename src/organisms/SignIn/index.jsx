import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import { InputLeftElement, InputRightElement } from '@chakra-ui/core';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import styles from './styles.module.scss';
import Text from '@chakra-ui/core/dist/Text';

const SignIn = () => {
  const [ login, setLogin ] = useState();
  const [ password, setPassword ] = useState();
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);
  const history = useHistory();

  const loginHandler = (e) => {
    setLogin(e.target.value)
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  };

  const userObj = {
    login: `${login}`,
    password: `${password}`
  };

  const sendHandler = () => {
    localStorage.setItem('user', JSON.stringify(userObj));

    if( login === 'admin@.com' && password === 'admin123') {
      history.push('/home')
    }

  };

  const clearHandler = () => {
    localStorage.clear()
  };

  // eslint-disable-next-line no-unused-vars
  const handlerHome = () => {
    history.push('/home')
  };

  return (
      <div className={styles.formWrapper}>
        <Stack spacing={3}>
          <Text fontSize="3xl">
            Sign In
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
                type="phone"
                placeholder="Email"
                onChange={loginHandler}
                focusBorderColor="#2C7A7B"
              />
            </InputGroup>

            <InputGroup size="md">
              <Input
                className={styles.input}
                pr="4.5rem"
                type={show ? "text" : "password"}
                onChange={passwordHandler}
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
            <button onClick={sendHandler} type="button" className={styles.button}>Sign In</button>
            <button onClick={clearHandler} className={styles.button}>clear</button>
            <br/>
          </div>
        </form>
        <div className={styles.linkWrapper}>
          <Link to='/register' className={styles.link}>
            Register
          </Link>
          <Link to='/forgot-password' className={styles.link}>
            Forgot password
          </Link>
        </div>
      </div>
  )
};

export default SignIn;