import React from "react";

import styles from './section.module.scss';

import Navlink from "../partials/Navlink";

function Right(){
    return(
        <section className={styles.container}>
            <Navlink link="Movie" path="/movie" className={styles.nav}/>
            <Navlink link="Series" path="/series" className={styles.nav}/>
            <Navlink link="Animations" path="/anime" className={styles.nav}/>
            <Navlink link="Login/Signup" path="/login" className={styles.nav}/>
        </section>
    );
}
    
export default Right;