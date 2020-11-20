import React from 'react';
import {SideBar} from '../../organisms';
import SettingsInputsGroup from '../../molecules/SettingsInputsGroup';


const SettingsTemplate = () => {
  return (
    <>
      <SideBar />
      <div>
        <h1
          style={{
            fontWeight: 600,
            fontSize: 25,
            textTransform: 'uppercase'
          }}
        >
          Settings Page
        </h1>
        <SettingsInputsGroup/>
      </div>
    </>
  )
};

export default SettingsTemplate