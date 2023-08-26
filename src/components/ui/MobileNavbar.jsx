import React from "react";

function MobileNavbar() {
    return(
        <div className="mobile-nav nav-links grid items-center justify-center">
            <ul className="list-none grid gap-y-3 mobile-login-list">
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
            <div className="login-btn py-3 mobile-login-btn">
                <a href="">Log In</a>
            </div>
        </div>
    )
}

export default MobileNavbar;