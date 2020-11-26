import { createEvent, createStore } from 'effector';

export const buyMessageEvent = createEvent();
export const sellMessageEvent = createEvent();

export const MessagesStore = createStore([])
  .on(buyMessageEvent, (store, messageBuy) => ([messageBuy, ...store]))
  .on(sellMessageEvent, (store, messageSell) => ([messageSell, ...store]))
