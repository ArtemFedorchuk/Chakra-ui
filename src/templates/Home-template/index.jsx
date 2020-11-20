import React from 'react'

import { SideBar, MessageBox } from '../../organisms/';

import {
  Graph,
  ButtonGroup,
  HomeInputGroup,
  CounterGroup,
  CurrentGroup
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
            <HomeInputGroup />
          </div>
          <ButtonGroup />
        </div>
        <div className={styles.rightContent}>
          <MessageBox />
        </div>
      </div>
    </>
  )
};

export default HomeTemplate;