import React from "react";
import Left from "./sections/Left";
import SearchBar from "./sections/SearchBar";
import Rigth from "./sections/Right";

function NavBar(){
    return(
        <header>
            <Left/>
            <SearchBar/>
            <Rigth/>
        </header>
    );
}

export default NavBar;