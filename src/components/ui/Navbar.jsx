import React, { useState } from "react";
import logo from "../../assets/imgs/Logo.svg";
import hamburger from "../../assets/imgs/hamburger.png"
import closeMenu from "../../assets/imgs/close.png"
import MobileNavbar from "./MobileNavbar";


function Navbar(){
    const [toggle, setToggle] = useState(false);


    return(
        <header className="w-full ">
            <nav className="w-full flex justify-between items-center">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"  height="37px" width="156px" />
                    </a>
                </div>
                <div className="nav-links flex items-center">
                    <ul className="list-none flex">
                        <li>
                            <a href="">Product</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                    </ul>
                    <div className="login-btn">
                        <a href="">Log In</a>
                    </div>
                </div>
               {!toggle ?
                <div 
                    onClick={() =>   setToggle(true)}
                    className="nav-links-mobile flex items-center">
                    <img src={hamburger} alt="menu" height="30px" width="30px" />
                </div>
                :
                <div 
                    onClick={() =>   setToggle(false)}
                    className="nav-links-mobile flex items-center">
                    <img src={closeMenu} alt="menu" height="30px" width="30px" />
                </div>}
            </nav>

            {toggle && <MobileNavbar />}
        </header>
    )
}


export default Navbar