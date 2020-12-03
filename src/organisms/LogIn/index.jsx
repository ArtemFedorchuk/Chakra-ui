import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import Text from '@chakra-ui/core/dist/Text';
import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import { InputLeftElement, InputRightElement } from '@chakra-ui/core';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import {useAuthData} from '../../contexts/auth-context/authContext';
import styles from './styles.module.scss';
import * as axios from 'axios';
import useToast from '@chakra-ui/core/dist/Toast';

const LogIn = () => {
  const toast = useToast()

  const { setAuthValues } = useAuthData()
  const [ login, setLogin ] = useState();
  const [validateInputValue, setValidateInputValue] = useState(null)
  const [ password, setPassword ] = useState();
  const [show, setShow] = React.useState(false);
  const [sendInfo, setSendInfo ] = useState(false);

  useEffect(() => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!login) {
      errors.email = "Email is required";
    } else if (!regex.test(login)) {
      errors.email = "Invalid Email";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password too short";
    }

    if (Object.keys(errors).length === 0) {
      setValidateInputValue(true)
    }
  }, [login, password])

  const showToast = (title = 'title', description = 'description', status= 'success') => {
    return toast({
      position: "top-right",
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true,
    })
  }

  const handleShow = () => setShow(!show);
  const history = useHistory();

  const loginHandler = (e) => {
    setLogin(e.target.value)
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  };

  const sendHandler = () => {
    if (validateInputValue) {
      axios.post('http://localhost:3001/api/auth/login', {
        email: `${login}`,
        password: `${password}`
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log('token ', response.data.token)
            document.cookie = `token=${response.data.token}`
            localStorage.setItem('auth', 'true');

            setAuthValues({ auth: true });

            setTimeout(() => {
              history.push('/home');
            }, 1500)
            setSendInfo(true)
          }
        })
        .catch(function (error) {
          console.log(error);
          showToast('Something went wrong!', '',"error")
          setSendInfo(false)
        });
    }
    else {
      showToast('Invalid Email or Password', 'We need add correct data!',"warning")
      setValidateInputValue(true)
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Stack spacing={3}>
        <Text fontSize="3xl">
          Log In to CRYPT TOOL
        </Text>
      </Stack>
      <form action='' className={styles.form}>
        <Stack spacing={6}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiAtSymbol color="gray.300"/>}
            />
            <Input
              isInvalid={validateInputValue}
              type="phone"
              placeholder="Email"
              onChange={loginHandler}
              focusBorderColor="#2C7A7B"
            />
          </InputGroup>

          <InputGroup size="md">
            <Input
              isInvalid={validateInputValue}
              className={styles.input}
              pr="4.5rem"
              type={show ? 'text' : 'password'}
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
                {show ? 'Hide' : 'Show'}
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
            <button onClick={sendHandler} type="button" className={styles.button}>Sign In</button>

          )}
        </div>
      </form>
      <div className={styles.linkWrapper}>
        <Link to='/registration' className={styles.link}>
          Registration
        </Link>
        <Link to='/forgot-password' className={styles.link}>
          Forgot password
        </Link>
      </div>
    </div>
  )
};

export default LogIn;