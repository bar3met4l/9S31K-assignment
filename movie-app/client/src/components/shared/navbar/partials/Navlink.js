import React from "react";

function Navlink(props){
    const {link,path,className} = props;
    return(
        <a href={path} className={className}>{link}</a>
    );
}

export default Navlink;