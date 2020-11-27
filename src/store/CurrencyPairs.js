import { createEvent, createStore } from 'effector';

export const currencyPairsEvent = createEvent('');

export const currencyPairsStore = createStore('')
.on(currencyPairsEvent, (store, currencyPair) => (currencyPair))