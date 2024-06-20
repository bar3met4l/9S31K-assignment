import React from "react";

import styles from './section.module.css';

import Navlink from "../partials/Navlink";

function Left(){
    return(
        <section className={styles.container}>
            <Navlink link="Home" path="/home"/>
            <Navlink link="Genre" path="/genre"/>
            <Navlink link="Country" path="/country"/>
        </section>
    );
}
    
export default Left;