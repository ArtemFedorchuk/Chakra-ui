import React, {useState} from 'react';
import Switch from 'react-input-switch';
import {DemoToolSwitchEvent} from '../../store';


const SwitchControl = () => {
  const [value, setValue] = useState('no');

  DemoToolSwitchEvent(value)

  console.log('value -> ',value)

  return (
    <>
      <Switch
        on="yes"
        off="no"
        value={value}
        onChange={setValue}
        styles={{
          container: {
            width: 30,
            height: 20,
          },
          track: {
            backgroundColor: '#E53E3E',
            borderRadius: 10,
          },
          trackChecked: {
            backgroundColor: '#38A169'
          },
          button: {
            backgroundColor: 'white'
          },
          buttonChecked: {
            backgroundColor: 'white'
          }
        }}
      />
    </>
  )
}

export default SwitchControl;