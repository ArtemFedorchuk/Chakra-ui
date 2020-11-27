import React, {useEffect} from 'react';
import {io} from 'socket.io-client';
import {useStore} from 'effector-react';
import {
  inputValueStore,
  sellOffEvent,
  startEvent,
  stopEvent,
  buyMessageEvent,
  sellMessageEvent,
  CurrentPriceEvent,
  SafetyEvent,
  CurrentStopLossEvent,
  NextBuyAtEvent,
  ProfitsEvent,
  currentPriceInpValueStore, currencyPairsStore, DemoToolSwitchStore,
} from '../store';

const socket = io('http://localhost:3001');

const SocketClient = () => {
  const inputStore = useStore(inputValueStore);
  const currentPriceInpValue = useStore(currentPriceInpValueStore);
  const currencyPairsValue = useStore(currencyPairsStore);
  const demoToolSwitchValue = useStore(DemoToolSwitchStore);

  const {walletVolumeNumber,takerCommissionNumber,takerUsdNumber,stopLossNumber,buyNextNumber} = inputStore;

//START BUTTON
  useEffect(() => {
    return startEvent.watch(() => {
      console.log('Start...');

      socket.emit('binanceApp', {
        'status': true,
        'taker': takerCommissionNumber,
        'walletVolume': parseFloat(walletVolumeNumber),
        'buyNext': parseFloat(buyNextNumber),
        'takerUsd': parseFloat(takerUsdNumber),
        'loss': parseFloat(stopLossNumber),
        'currencyPair': currencyPairsValue,  //text currency pairs 'string'
        'demoStatus': demoToolSwitchValue // status demo tool 'bool'
      });
    })
  }, [
    takerCommissionNumber,
    walletVolumeNumber,
    buyNextNumber,
    takerUsdNumber,
    stopLossNumber,
    currencyPairsValue,
    demoToolSwitchValue
  ])

  //STOP BUTTON
  useEffect(() => {
     return stopEvent.watch(() => {
      console.log('Stop...')
      socket.emit('binanceApp', {
        'status': false,
      });
    })
  },[])

  // BUTTON EXTRA STOP
  useEffect(() => {
    return sellOffEvent.watch(() => {
      console.log('EXTRA Stop...')

      socket.emit('binanceApp', {
        'extraExit': true,
        'extraPrice': +currentPriceInpValue,
        'extraTaker': takerCommissionNumber
      });
    })
  }, [currentPriceInpValue, takerCommissionNumber])


  useEffect(() => {
    socket.on('binanceApp', (response) => {
      if (response.action) {
        if (response.action === 'Buy') {
          generateLiElement(response);
        } else if (response.action === 'Sell') {
          generateLiElement(response);
          if (response.profit) {
            ProfitsEvent(response.profit)
          }
        }
      }
      if (response.price && response.prevPrice) {
        // CurrentPriceEvent(response.price)
        CurrentPriceEvent(response)
      }
      if (response.stopPrice || response.nextBuyAt) {
        CurrentStopLossEvent(response.stopPrice);
        NextBuyAtEvent(response.nextBuyAt)
      }
      if (response.safetyLine) {
        SafetyEvent(response.safetyLine)
      } else {
        SafetyEvent(0)
      }
    });
  },[])

  function generateLiElement(data) {
    if (data.action === 'Buy') {
      try {
        const buyObj = {
          buy: true,
          price: parseFloat(data.buyPrice.toFixed(2)),
          time: new Date(data.time).toLocaleTimeString('en-US')
        }

        buyMessageEvent(buyObj)
      }catch (error) {
        console.log(error)
      }
    } else if (data.action === 'Sell') {
      try {
        const sellObj = {
          sell: true,
          profit: parseFloat(data.profit.toFixed(2)),
          sellPrice: parseFloat(data.sellPrice.toFixed(2)),
          time: new Date(data.time).toLocaleTimeString('en-US')
        }

        sellMessageEvent(sellObj)
      }catch (error) {
        console.log(error)
      }
    }
  }

  return(
    <></>
  )
}

export default SocketClient;
