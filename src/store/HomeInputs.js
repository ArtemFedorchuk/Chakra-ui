import { createEvent, createStore } from 'effector';

export const walletEvent = createEvent(0);
export const takerCommissionEvent = createEvent(0);
export const takerUsdEvent = createEvent(0);
export const stopLossEvent = createEvent(0);
export const buyNextEvent = createEvent(0);

export const inputValueStore = createStore({})
  .on(walletEvent, (store, walletNum) => ({...store, walletVolumeNumber: +walletNum}))
  .on(takerCommissionEvent, (store, takerCommissionNum) => ({...store, takerCommissionNumber: +takerCommissionNum}))
  .on(takerUsdEvent, (store, takerUsdNum) => ({...store, takerUsdNumber: +takerUsdNum}))
  .on(stopLossEvent, (store, stopLossNum) => ({...store,stopLossNumber: +stopLossNum}))
  .on(buyNextEvent, (store, buyNextNum) => ({...store,buyNextNumber: +buyNextNum}));