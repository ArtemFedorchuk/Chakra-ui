import React from 'react'
import {HomeTemplate} from '../../templates';
import SocketClient from '../../client/client-socket';

const HomePage = () => {
  return (
    <>
      <SocketClient/>
      <HomeTemplate/>
    </>
  )
};

export default HomePage;