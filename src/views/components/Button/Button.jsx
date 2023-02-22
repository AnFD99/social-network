import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, unfollow, disabled, ...props }) => {
   return (
      <button
         {...props}
         className={`${styles.btn}`}
         disabled={disabled}
      >
         {children}
      </button>
   )
}

export default Button


