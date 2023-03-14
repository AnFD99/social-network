import React, { FC } from 'react'
import styles from './Button.module.css'

type PropsType = {
   children: React.ReactNode
   disabled: boolean
   type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button: FC<PropsType> = ({ children, disabled, type, ...props }) => {
   return (
      <button
         className={`${styles.btn}`}
         disabled={disabled}
         type={type}
      >
         {children}
      </button>
   )
}

export default Button


