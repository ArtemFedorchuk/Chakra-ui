import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@chakra-ui/core";
import CSSReset from '@chakra-ui/core/dist/CSSReset';
import './App.css';
import HomePage from './pages/Home-page';
import ErrorPage from './pages/Eror-page';
import customTheme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Switch>
          <Route path="/home" render={() =>  <HomePage customTheme={customTheme}/>} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
