import React from 'react';
import {useStore} from 'effector-react';
import {DemoToolSwitchStore} from '../../store';
import {SwitchControl} from '../../atoms';

import styles from './styles.module.scss'

const DemoBlock = () => {
  const demoToolStore = useStore(DemoToolSwitchStore);

  return (
    <div  className={styles.demoToolWrapper}>
      <h1 className={styles.demoToolTitle}>Demo Tool</h1>
      <div className={styles.demoToolContent}>
        <p
          className={!demoToolStore ? styles.offDemo : ''}
        >
          Off
        </p>
        <SwitchControl/>
        <p
          className={demoToolStore ? styles.onDemo : ''}
        >
          On
        </p>
      </div>
    </div>
  )
};

export default DemoBlock;