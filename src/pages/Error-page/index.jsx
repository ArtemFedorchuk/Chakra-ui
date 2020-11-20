import React from 'react';

import styles from '../styles.module.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
   <>
     <div className={styles.Page404}>
       <h1>Sorry this page not found</h1>
       <Link to="/" className={styles.link}>
         LogIn
       </Link>
     </div>
   </>
  )
};

export default ErrorPage;