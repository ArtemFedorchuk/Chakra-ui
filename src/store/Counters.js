import { createEvent, createStore } from 'effector';

export const ProfitCounterEvent = createEvent();
export const LossCounterEvent = createEvent();
export const TotalCounterEvent = createEvent();
export const ProfitsEvent = createEvent();

export const ProfitCounterStore = createStore(0)
  .on(ProfitCounterEvent, (store, profitCounter) => (profitCounter))

export const LossCounterStore = createStore(0)
  .on(LossCounterEvent, (store, lossCounter) => (lossCounter))

export const TotalCounterStore = createStore(0)
  .on(TotalCounterEvent, (store, totalCounter) => (totalCounter))

export const ProfitsStore = createStore(0)
  .on(ProfitsEvent, (store, profits) => (profits))

