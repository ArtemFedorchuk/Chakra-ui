import React, { createContext, useContext, useState } from 'react';

const DataMainButtonContext = createContext(undefined);

export const DataMainButtonProvider = ({ children }) => {

  const [ dataButton, setDataButton ] = useState({});

  const setButtonValues = (values) => {
    setDataButton((prev) => ({
      ...prev,
      ...values
    }))
  };

  return (
    <DataMainButtonContext.Provider value={{dataButton, setButtonValues}}>
      { children }
    </DataMainButtonContext.Provider>
  )
};

export const useMainButtonData = () => useContext(DataMainButtonContext);