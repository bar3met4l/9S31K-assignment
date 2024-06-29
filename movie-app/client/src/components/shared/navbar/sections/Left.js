import React from "react";

import styles from './section.module.scss';

import Navlink from "../partials/Navlink";

function Left(){
    return(
        <section className={styles.container}>
            <Navlink link="Home" path="/home" className={styles.nav}/>
            <Navlink link="Genre" path="/genre" className={styles.nav}/>
            <Navlink link="Country" path="/country" className={styles.nav}/>
        </section>
    );
}
    
export default Left;