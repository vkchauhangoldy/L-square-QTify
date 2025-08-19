import React from 'react'
import styles from './ButtonComponent.module.css';
function ButtonComponent({text}) {
    return(
        <button className={styles.button}>{text}</button>
    )
}

export default ButtonComponent