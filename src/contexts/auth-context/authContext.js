import React, { createContext, useContext, useState } from 'react';

const DataAuthContext = createContext(undefined);

export const DataAuthProvider = ({ children }) => {

  const [ dataAuth, setDataAuth ] = useState({});

  const setAuthValues = (values) => {
    setDataAuth((prev) => ({
      ...prev,
      ...values
    }))
  };

  return (
    <DataAuthContext.Provider value={{dataAuth, setAuthValues}}>
      { children }
    </DataAuthContext.Provider>
  )
};

export const useAuthData = () => useContext(DataAuthContext);