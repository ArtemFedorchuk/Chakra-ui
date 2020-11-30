import React from 'react'
import { SideBar, MessageBox } from '../../organisms/';
import DemoBlock from '../../molecules/DemoBlock';
import CurrencyPairs from '../../atoms/CurrencyPairs';

import {
  Graph,
  ButtonGroup,
  HomeInputGroup,
  CounterGroup,
  CurrentGroup,
  SellProfitBlock
} from '../../molecules';

import styles from './styles.module.scss'

const HomeTemplate = () => {
  return (
    <>
      <SideBar />
      <Graph />
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <CounterGroup />
          <div className={styles.currentGroupWrapper}>
            <CurrentGroup />
          </div>
          <div className={styles.inputGroupWrapper}>
            <div className={styles.currencyPairsItem}>
              <CurrencyPairs />
            </div>
            <HomeInputGroup />
          </div>
          <div className={styles.bottomBlock}>
            <ButtonGroup />
            <SellProfitBlock />
          </div>
        </div>
        <div className={styles.rightContent}>
          <div>
            <DemoBlock/>
          </div>
          <MessageBox />
        </div>
      </div>
    </>
  )
};

export default HomeTemplate;