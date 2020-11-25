import { createEvent, createStore } from 'effector';

export const CurrentPriceEvent = createEvent();
export const SafetyEvent = createEvent();
export const CurrentStopLossEvent = createEvent()
export const NextBuyAtEvent = createEvent()

export const CurrentPriceStore = createStore([])
  .on(CurrentPriceEvent, (store, currentPrice) => (currentPrice))

export const SafetyStore = createStore(0)
  .on(SafetyEvent, (store, safetyValue) => (safetyValue))

export const CurrentStopLossStore = createStore(0)
  .on(CurrentStopLossEvent, (store, currentStopLoss) => (currentStopLoss))

export const NextBuyAtStore= createStore(0)
  .on(NextBuyAtEvent, (store, nextBuyAt) => (nextBuyAt))

