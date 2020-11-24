import React, {useState} from 'react';
import {Alert, AlertIcon} from '@chakra-ui/core';
import {startEvent,stopEvent,sellOffEvent} from '../../store';
import CloseButton from '@chakra-ui/core/dist/CloseButton';

const StatusBlock = () => {
  const [ status, setStatus ] = useState(null);
  const [ show, setShow ] = useState(false);

  startEvent.watch(() => {
    setShow(true);
    setStatus(true)
  });

  stopEvent.watch(() => {
    setShow(true);
    setStatus(false)
  });

  sellOffEvent.watch(() => {
    setShow(true);
    setStatus(false)
  });
  return (
    <>
      {show && (
        <>
          {status ? (
            <div style={{width: '100%'}}>
              <Alert status="success" variant="subtle">
                <AlertIcon />
                Start Crypto tool!
                <div onClick={() => setShow(false)}>
                  <CloseButton position="absolute" right="8px" top="8px" />
                </div>
              </Alert>
            </div>
          ): (
            <Alert status="error">
              <AlertIcon />
              STOPPED Crypto tool!
              <div onClick={() => setShow(false)}>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                />
              </div>
            </Alert>
          )}
        </>
      )}
    </>
  )
};

export default StatusBlock;