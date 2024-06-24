import React from 'react'
import StarRating from '../partials/StarRating'
import { Button } from '@mui/material'

import styles from '../cardcomponent.module.scss'

function Right({props}) {
    
    function ifAvailable(){
        if(props.availability){
            return <Button className={styles.button1}>Add to Cart</Button>
        }
        else{
            return (
                <div >
            <p style={{color:"#565959", fontSize:"10px"}}>Currently Unavilable</p>
                <Button  className={styles.button2}>See options</Button>
                </div>
            )
        }
    }
    function finalprice(){
    return (props.price*(100-props.discount)/100).toFixed(2)
    }
  return (
    <section className={styles.right}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.description}</p>
        <StarRating rating={props.rating} />
        <div className={styles.price}>
        <p style= {{fontSize: "24px"}}>&#8377;{finalprice()} </p>
        <p style={{color:"#565959", fontSize:"12px"}}>&nbsp;M.R.P:{props.price}</p>
        <p style={{fontSize:"12px"}}>&nbsp;({props.discount}% off)</p>
        </div>
        <div>
            {ifAvailable()}
        </div>

    </section>
  )
}

export default Right
