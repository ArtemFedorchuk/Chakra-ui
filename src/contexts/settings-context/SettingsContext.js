import React, { createContext, useContext, useState } from 'react';

const DataSettingsContext = createContext(undefined);

export const DataSettingsProvider = ({ children }) => {

  const [ dataSettings, setDataButton ] = useState({});

  const setSettingsValues = (values) => {
    setDataButton((prev) => ({
      ...prev,
      ...values
    }))
  };

  return (
    <DataSettingsContext.Provider value={{dataSettings, setSettingsValues}}>
      { children }
    </DataSettingsContext.Provider>
  )
};

export const useSettingsData = () => useContext(DataSettingsContext);