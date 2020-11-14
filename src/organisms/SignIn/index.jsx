import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import { InputLeftElement, InputRightElement } from '@chakra-ui/core';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import styles from './styles.module.scss';

const SignIn = () => {
  const [ login, setLogin ] = useState();
  const [ password, setPassword ] = useState();
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);
  const history = useHistory();


  console.log('login -> ', login );
  console.log('password -> ', password );

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
    localStorage.setItem('user', JSON.stringify(userObj))

  };

  const clearHandler = () => {
    localStorage.clear()
  };

  const handlerHome = () => {
    history.push('/home')
  };

  return (
      <div className={styles.formWrapper}>
        <h2>SignIn</h2>
        <form action='' className={styles.form}>
          <input type='text' onChange={loginHandler}/>
          <input type='password' onChange={passwordHandler}/>

          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<HiAtSymbol color="gray.300" />}
              />
              <Input type="phone" placeholder="Email" />
            </InputGroup>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <button onClick={sendHandler} type="button" className={styles.button}>Send</button>
          <button onClick={clearHandler} className={styles.button}>clear</button>
          <br/>
          <button onClick={handlerHome}>Home</button>
        </form>
      </div>
  )
};

export default SignIn;