import React from 'react'

import * as assets from "../../../../assets"
import styles from './hero.module.scss';
import Button from '../../../../components/atoms/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CarouselItem from '../../partials/carousel-items';
import CarouselData from '../../../../data/Carousel.js';


function Hero() {
  return (
    <section className={styles.container}>
        <Carousel showThumbs={false} className={styles.carousel}>
        {/* <article className={styles["carousel-item"]}>
        
        <img src={assets.Avatar} alt='avatar-home'/>
        <div className={styles.content}>
          <div className={styles.btns}>
        <Button name={"Watch now"} handler={()=>console.log("clicked watch")} className={styles.now} >
          <Icon icon="icon-park-solid:play"/>
        </Button>
        <Button name={"Watch Later"} handler={()=>console.log("clicked watch")} className={styles.later} >
          <Icon icon="mdi:clock"/>
        </Button>
        </div>
        </div>
        </article> */}
        {CarouselData.map((item, index) => (
            <CarouselItem key={index} item={item} />
        ))}
        
        
        </Carousel>
        
        
        
        
    </section>
  );
;}

export default Hero
