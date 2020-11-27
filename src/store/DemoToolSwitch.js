import { createEvent, createStore } from 'effector';

export const DemoToolSwitchEvent = createEvent('');

export const DemoToolSwitchStore = createStore(false)
  .on(DemoToolSwitchEvent, (store, demoToolSwitch) => (demoToolSwitch))