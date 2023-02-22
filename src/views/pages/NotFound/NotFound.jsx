import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
   return (
      <div>
         <h1>404 Error Page Not Found</h1>
         <section className={styles.errorContainer}>
            <span className={styles.four}>
               <span className={styles.screenReaderText}>4</span>
            </span>
            <span className={styles.zero}>
               <span className={styles.screenReaderText}>0</span>
            </span>
            <span className={styles.four}>
               <span className={styles.screenReaderText}>4</span>
            </span>
         </section>
      </div>
   )
}

export default NotFound




