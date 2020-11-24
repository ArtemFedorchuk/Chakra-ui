import React, {useState} from 'react';
import {Alert, AlertIcon} from '@chakra-ui/core';
import {startEvent,stopEvent,sellOffEvent} from '../../store';

const StatusBlock = () => {
  const [ status, setStatus ] = useState(null)
  const [ show, setShow ] = useState(false)

  startEvent.watch(() => {
    setShow(true)
    setStatus(true)
  })
  stopEvent.watch(() => setStatus(false))
  sellOffEvent.watch(() => setStatus(false))
  return (
    <>
      {show && (
        <>
          {status ? (
            <div style={{width: '100%'}}>
              <Alert status="success" variant="subtle">
                <AlertIcon />
                Start Crypto tool!
              </Alert>
            </div>
          ): (
            <Alert status="error">
              <AlertIcon />
              STOPPED Crypto tool!
            </Alert>
          )}
        </>
      )}
    </>
  )
};

export default StatusBlock;