import React, { createContext, useContext, useState } from 'react';

const DataInputContext = createContext(undefined);

export const DataInputProvider = ({ children }) => {

  const [ data, setData ] = useState({});

  const setValues = (values) => {
    setData((prev) => ({
      ...prev,
      ...values
    }))
  };

  return (
      <DataInputContext.Provider value={{data, setValues}}>
        { children }
      </DataInputContext.Provider>
  )
};

export const useInputData = () => useContext(DataInputContext);