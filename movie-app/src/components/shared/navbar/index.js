import React from "react";

import Left from "./sections/Left";
import SearchBar from "./sections/SearchBar";
import Rigth from "./sections/Right";

import styles from './navbar.module.scss';

function NavBar(){
    return(
        <header className={styles.header}>
            <Left/>
            <SearchBar/>
            <Rigth/>
        </header>
    );
}

export default NavBar;