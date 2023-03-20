import React, { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import styles from './Like.module.css'

type Props = {
    children: string;    
    onClick: () => void;
}


const Like = ({children, onClick}: Props) => {
    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    
  return (
    <>
    {status && <div><BsHeart className={styles.txt} onClick={toggle}/>{children}</div>}
    {!status && <div><BsFillHeartFill className={styles.txt} onClick={toggle}/>{children}</div>}
    </>
  )
}

export default Like