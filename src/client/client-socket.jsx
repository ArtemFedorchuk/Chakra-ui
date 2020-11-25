import React, {useEffect} from 'react';
import {io} from 'socket.io-client';
import {useStore} from 'effector-react';
import {
  inputValueStore,
  sellOffEvent,
  startEvent,
  stopEvent,
  // buyMessageEvent,
  // sellMessageEvent,
  // CounterEvent,
  // MessagesStore,
  // CountersStore,
  // ProfitsStore,
  CurrentPriceEvent,
  SafetyEvent,
  CurrentStopLossEvent,
  NextBuyAtEvent,
  ProfitsEvent
} from '../store';

const socket = io('http://localhost:3001');


const SocketClient = () => {
  const inputStore = useStore(inputValueStore)
  // const messageStore = useStore(MessagesStore)
  // const counterStore = useStore(CountersStore)
  // const profitStore = useStore(ProfitsStore)

  const {walletVolumeNumber,takerCommissionNumber,takerUsdNumber,stopLossNumber,buyNextNumber} = inputStore;

  // console.log('messageStore => ', messageStore)
  // console.log('profitStore => ', profitStore)

//START BUTTON
  useEffect(() => {
    startEvent.watch(() => {
      console.log('Start....');
      // socket.on('connect', (res) => {
      //   console.log(socket);
      // });

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
    stopEvent.watch(() => {
      console.log('Stop...')
      socket.emit('binanceApp', {
        'status': false,
      });
    })
  },[])

  // BUTTON EXTRA STOP
  useEffect(() => {
    sellOffEvent.watch(() => {
      console.log('EXTRA Stop...')
      socket.emit('binanceApp', {
        'extraExit': true,
        // 'extraPrice': document.querySelector('#currentPrice > span').innerHTML,
        // 'extraTaker': document.getElementById('taker-value').value
      });
    })
  }, [])


  socket.on('binanceApp', (response) => {
    // console.log ('response => ', response)
  if (response.action) {
    if (response.action === 'Buy') {
      // blockSellNowButton(false);
      // let buyElement = generateLiElement(response);
      // collection.appendChild(buyElement);
      // buyMessageEvent(response)
    }
    else if (response.action === 'Sell') {
      // blockSellNowButton(true);
      // let sellElement = generateLiElement(response);
      // collection.appendChild(sellElement);
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

  // function countProfits(profit) {
  //   // let lossBox = document.getElementById('loss-orders-count');
  //   // let profitBox = document.getElementById('profit-orders-count');
  //   // let totalBox = document.getElementById('total-orders-count');
  //   let currentProfit = Number(parseFloat(profit).toFixed(2));
  //
  //   if (currentProfit > 0) {
  //     // profitBox.value = Number(parseFloat(profitBox.value).toFixed(2)) + currentProfit;
  //     ProfitCounterEvent()
  //   } else {
  //     // lossBox.value = Number(parseFloat(lossBox.value).toFixed(2)) - currentProfit;
  //     LossCounterEvent()
  //   }
  //   // totalBox.value = parseFloat(profitBox.value) - parseFloat(lossBox.value);
  //   TotalCounterEvent()
  // }

  return(
    <></>
  )
}

export default SocketClient


// -------------- Old logic -------------------
// // let socket = io();
// let startButton = document.getElementById('start-button');
// let stopButton = document.getElementById('stop-button');
// let extraStopButton = document.getElementById('sell-now-button');
// let collection = document.getElementById('collection');
// let toolStatus = document.getElementById('status-value');

// // Add status STOP (styles)
// function showStop() {
//   toolStatus.textContent = 'Stopped';
//   toolStatus.classList.remove('green', 'lighten-2');
//   toolStatus.classList.add('red', 'lighten-2');
//   return false;
// }

// // Add disabled to button SELL NOW AND OFF
// function blockSellNowButton(sell = true) {
//   let sellNowButton = document.getElementById('sell-now-button');
//   if (sell) {
//     sellNowButton.disabled = true;
//   }
//   else {
//     sellNowButton.disabled = false;
//   }
// }
//
// //PROFIT COUNTER
// function countProfits(profit) {
//   let lossBox = document.getElementById('loss-orders-count');   // LOSS counter
//   let profitBox = document.getElementById('profit-orders-count');  // PROFIT counter
//   let totalBox = document.getElementById('total-orders-count'); // TOTAL counter
//   let currentProfit = Number(parseFloat(profit).toFixed(2));
//   if (currentProfit > 0) {
//     profitBox.value = Number(parseFloat(profitBox.value).toFixed(2)) + currentProfit;
//   } else {
//     lossBox.value = Number(parseFloat(lossBox.value).toFixed(2)) - currentProfit;
//   }
//   totalBox.value = parseFloat(profitBox.value) - parseFloat(lossBox.value);
// }
//
// // CURRENT STOP LOSS block
// function changeStopLossOrNextBuyOnMonitor(response) {
//   let currentStopLoss = document.getElementById('currentStopLoss');
//   let currentNextBuy = document.getElementById('nextBuyAt');
//   let price = document.createElement('span');
//
//   if (response.nextBuyAt > 0) {
//     currentStopLoss.innerHTML = '0';
//     currentNextBuy.innerHTML = '';
//     price.textContent = response.nextBuyAt.toFixed(2);
//     currentNextBuy.appendChild(price);
//   } else if (response.stopPrice > 0) {
//     currentStopLoss.innerHTML = '';
//     currentNextBuy.innerHTML = '0';
//     price.textContent = response.stopPrice.toFixed(2);
//     currentStopLoss.appendChild(price);
//   }
// }
//

// // Block MESSAGES
// function generateLiElement(data) {
//   let element = document.createElement('li');
//   let icon = document.createElement('i');
//   let title = document.createElement('span');
//   let info = document.createElement('p');
//   let link = document.createElement('a');

//   // Implement counter of operations
//   let countLi = document.getElementById('collection').getElementsByTagName('li').length + 1;
//   let countElement = document.createElement('span');
//   countElement.textContent = countLi;
//   countElement.classList.add('counter');
//   element.classList.add('collection-item', 'avatar');
//   icon.classList.add('material-icons', 'circle');
//   title.classList.add('title');
//   link.classList.add('secondary-content');

//   if (data.action === 'Buy') {
//     icon.classList.add('light-green', 'darken-2');
//     info.textContent = 'Price: $' + parseFloat(data.buyPrice.toFixed(2));
//   } else if (data.action === 'Sell') {
//     icon.classList.add('orange', 'darken-3');
//     info.textContent = 'Profit: $' + parseFloat(data.profit.toFixed(2)) + ' | Sell price: $' + parseFloat(data.sellPrice.toFixed(2));
//   }

//   // Content for entities
//   icon.textContent = 'attach_money';
//   title.textContent = data.action;
//   link.textContent = new Date(data.time).toLocaleTimeString('en-US');
//   // append elements into each other
//   element.appendChild(icon);
//   element.appendChild(title);
//   element.appendChild(info);
//   element.appendChild(link);
//   element.appendChild(countElement);
//   return element;
// }
