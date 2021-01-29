import React from 'react'
import './Footer.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div id="footer">
            <a href="http://react-plus.com"><FontAwesomeIcon icon={faHome} /></a>
            <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    )
    
}
export default Footer