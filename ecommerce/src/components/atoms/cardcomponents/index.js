import React , {useState} from 'react'
import Left from './sections/left'
import Right from './sections/right'


import styles from './cardcomponent.module.scss'



function CardComponent({feedData}) {
    console.log("feedData",feedData);
  return (
    <div className={styles.container}>
        <Left />
        <Right props={feedData}/>
    </div>
  )
}

export default CardComponent

