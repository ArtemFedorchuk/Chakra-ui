import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import * as axios from 'axios';
import Stack from '@chakra-ui/core/dist/Stack';
import InputGroup from '@chakra-ui/core/dist/InputGroup';
import useToast from '@chakra-ui/core/dist/Toast';
import { InputLeftElement, InputRightElement } from '@chakra-ui/core';
import Text from '@chakra-ui/core/dist/Text';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';

import { HiAtSymbol } from "react-icons/hi";

import styles from './styles.module.scss';

const Registration = () => {
  const toast = useToast()

  const history = useHistory();
  const [validateInputValue, setValidateInputValue] = useState(false)
  const [validate, setValidate] = useState(false)
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [show, setShow] = React.useState(false);
  const [sendInfo, setSendInfo ] = useState(false);

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

    useEffect(() => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!email) {
        errors.email = "Email is required";
      } else if (!regex.test(email)) {
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
    }, [email, password])

  const handleShow = () => {
    setShow(!show);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  };

  const sendEmail = () => {
    if (validateInputValue) {
      axios.post('http://localhost:3001/api/auth/register', {
        email: `${email}`,
        password: `${password}`
      })
        .then( (response) => {
          if (response.status === 201) {
            setSendInfo(true)
            showToast('Successful Registration', '',"success")
            setTimeout(() => {
              history.push('/');
            }, 1500)
          }

        })
        .catch( (error) => {
          console.log(error.message);
          setValidate(true)
          setSendInfo(false)
          showToast('Something went wrong!', 'Or such user already exists',"error")
        });
    }
    else {
      setValidate(true)
        showToast('Invalid Email or Password', 'Incorrect Email or password must be 6 characters or longer!',"warning")
    }
  }

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
                isInvalid={validate}
                type="email"
                placeholder="Email"
                focusBorderColor="#2C7A7B"
                onChange={emailHandler}
              />
            </InputGroup>

            <InputGroup size="md">
              <Input
                isInvalid={validate}
                className={styles.input}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                focusBorderColor="#2C7A7B"
                onChange={passwordHandler}
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
              <button
                onClick={sendEmail}
                type="button"
                className={styles.button}>
                Registration
              </button>
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