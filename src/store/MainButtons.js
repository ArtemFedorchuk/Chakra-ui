import { createEvent, createStore } from 'effector';

export const startEvent = createEvent();
export const stopEvent = createEvent();
export const sellOffEvent = createEvent();


export const mainButtonStateStore = createStore({})
  .on(startEvent, (store, startState) => ({...store, startButton: startState}))
  .on(stopEvent, (store, stopState) => ({...store, stopButton: stopState}))
  .on(sellOffEvent, (store, sellOffState) => ({...store, sellOffButton: sellOffState}));
