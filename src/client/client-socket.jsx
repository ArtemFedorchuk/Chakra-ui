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
  MessagesStore,
  CurrentPriceEvent,
  SafetyEvent,
  CurrentStopLossEvent,
  NextBuyAtEvent,
  ProfitsEvent,
  currentPriceInpValueStore,
} from '../store';

const socket = io('http://localhost:3001');


const SocketClient = () => {
  const inputStore = useStore(inputValueStore);
  const currentPriceInpValue = useStore(currentPriceInpValueStore);
  const messageStore = useStore(MessagesStore)

  const {walletVolumeNumber,takerCommissionNumber,takerUsdNumber,stopLossNumber,buyNextNumber} = inputStore;

  // console.log('messageStore -> ', messageStore)

//START BUTTON
  useEffect(() => {
    return startEvent.watch(() => {
      console.log('Start...');
      console.log('takerCommissionNumber => ', takerCommissionNumber)
      console.log('walletVolumeNumber => ', walletVolumeNumber)
      console.log('buyNextNumber => ', buyNextNumber)
      console.log('takerUsdNumber => ', takerUsdNumber)
      console.log('stopLossNumber => ', stopLossNumber)

      socket.emit('binanceApp', {
        'status': true,
        'taker': takerCommissionNumber,
        'walletVolume': parseFloat(walletVolumeNumber),
        'buyNext': parseFloat(buyNextNumber),
        'takerUsd': parseFloat(takerUsdNumber),
        'loss': parseFloat(stopLossNumber)
      });
    })
  }, [takerCommissionNumber,walletVolumeNumber,buyNextNumber,takerUsdNumber,stopLossNumber])

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
      console.log('messageStore -> ', messageStore)

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
        // console.log('response.action => ',response.action)
        if (response.action === 'Buy') {
          // console.log ('action Buy')
          generateLiElement(response);
          // buyMessageEvent(response)
        } else if (response.action === 'Sell') {
          // console.log ('action Sell')
          generateLiElement(response);
          // sellMessageEvent(response)
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
      const buyObj = {
        buy: true,
        price: parseFloat(data.buyPrice.toFixed(2)),
        time: new Date(data.time).toLocaleTimeString('en-US')
      }

      buyMessageEvent(buyObj)
    } else if (data.action === 'Sell') {
      // icon.classList.add('orange', 'darken-3');
      // info.textContent = 'Profit: $' + parseFloat(data.profit.toFixed(2)) + ' | Sell price: $' + parseFloat(data.sellPrice.toFixed(2));
      const sellObj = {
        sell: true,
        profit: parseFloat(data.profit.toFixed(2)),
        sellPrice: parseFloat(data.sellPrice.toFixed(2)),
        time: new Date(data.time).toLocaleTimeString('en-US')
      }

      sellMessageEvent(sellObj)
    }

    // // Content for entities
    // icon.textContent = 'attach_money';
    // title.textContent = data.action;
    // link.textContent = new Date(data.time).toLocaleTimeString('en-US');
    // // append elements into each other
    // element.appendChild(icon);
    // element.appendChild(title);
    // element.appendChild(info);
    // element.appendChild(link);
    // element.appendChild(countElement);
    // return element;
  }

  return(
    <></>
  )
}

export default SocketClient;
