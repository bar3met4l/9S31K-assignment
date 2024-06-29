import React from 'react';

import * as assets from "../../../../assets";
import styles from './items.module.scss';
import Button from '../../../../components/atoms/button';
import { Icon } from '@iconify/react/dist/iconify.js';



function CarouselItem(props) {
  const {image,
  title,
  genre,
  launchYear,
  duration,
  rating,
  description,
  } = props.item;

  const watchNowHandler = () => {
    props.watchNowHandler();
  };
  const watchLaterHandler = () => {
    props.watchLaterHandler();
  };

  const formatMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    
    return `${hours}:${mins}:00`;

  };
    return (
    <article className={styles["carousel-item"]}>
        
        <img src={image} alt='avatar-home'/>
        <div className={styles.content}>
          <div className={styles.btns}>
        <Button name={"Watch now"} handler={watchNowHandler} className={styles.now} >
          <Icon icon="icon-park-solid:play"/>
        </Button>
        <Button name={"Watch Later"} handler={watchLaterHandler} className={styles.later} >
          <Icon icon="mdi:clock"/>
        </Button>
        </div>
        <article className={styles.footer}>
          <h2>{title}</h2>
          <div className={styles.genre}>
            <ul className={styles.categories}>
              {genre.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <div className={styles.meta}>
              <Icon icon="simple-line-icons:calender" />
              <span>{launchYear}</span>
            </div>
            <div className={styles.meta}>
              <Icon icon="mdi:clock-outline" />
              <span>{formatMinutes(duration)}</span>
            </div>
            <div className={styles.meta}>
              <Icon icon="mdi:star" />
              <span>{rating}</span>
            </div>
          </div>
          <p>{description}</p>
        </article>
        </div>
        </article>
        
  )
}

export default CarouselItem;

