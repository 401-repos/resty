import React from "react";
import './Footer.scss'

function getCurrentYear(){
    return new Date().getFullYear();
}

function Footer(props){
    return (<footer>
        <p>
            &copy; {getCurrentYear()} Code Fellows
        </p>
    </footer>)
}

export default Footer;