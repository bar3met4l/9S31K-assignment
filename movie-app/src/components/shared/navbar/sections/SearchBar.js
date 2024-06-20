import React from "react";
import {Icon} from "@iconify/react";

import styles from './section.module.css';

function SearchBar(){
    return(
      <article className={styles.container}>
        <input/>
        <Icon icon={"mdi:search"}/>

      </article>  
    )
}

export default SearchBar;