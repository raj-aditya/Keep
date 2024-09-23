import React from "react";


const currentYear = new Date().getFullYear();
function FooterBody(){
    return (
        
        <p> Copyright {currentYear} </p>
        
    )
}

export default FooterBody;