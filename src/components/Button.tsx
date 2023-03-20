import { useState } from 'react';
import styles from './Button.module.css'

type Props = {
    children: string;
    color?: string;
    onClick: () => void;    
}

const Button = ({children, onClick, color = "btn btn-primary"}: Props) => {
  return (        
    <button type="button" className={'btn btn-' + color } onClick={onClick}>{children}</button>
  )
}

export default Button