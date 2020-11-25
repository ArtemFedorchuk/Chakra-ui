import { createEvent, createStore } from 'effector';

export const buyMessageEvent = createEvent();
export const sellMessageEvent = createEvent();

export const MessagesStore = createStore([])
  .on(buyMessageEvent, (store, messageBuy) => ([...store, messageBuy]))
  .on(sellMessageEvent, (store, messageSell) => ([...store, messageSell]))
