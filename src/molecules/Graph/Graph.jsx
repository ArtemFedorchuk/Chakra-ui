import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './styles.module.scss'


const Graph = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'test'],
    type: 'line',
    datasets: [
      {
        label: '1 BTC',
        lineTension: 0.1,
        backgroundColor: 'rgba(229, 62, 62, .1)',
        borderColor: '#E53E3E',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [15, 59, 80, 81, 56, 55, 40, 67]
      },
      {
        label: '2 BTC',
        lineTension: 0.1,
        backgroundColor: 'rgba(159, 122, 234, .1)',
        borderColor: 'rgba(159, 122, 234, 1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [33, 67, 50, 77, 45, 110, 21, 5],

      }
    ],
  };

  return (
    <Line
      data={data}
      className={styles.graph}
      height={20}
      width={80}
    />
  )
};

export default Graph