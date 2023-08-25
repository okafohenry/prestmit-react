import React from 'react';
import logo from "../../assets/imgs/Logo.svg"

const landings = [
    { text: 'Home', route: '', addedText: null },
    { text: 'Products', route: '', addedText: null },
    { text: 'Services', route: '', addedText: null }
];
const company = [
    { text: 'Home', route: '', addedText: null },
    { text: 'Careers', route: '', addedText: 'Hiring' },
    { text: 'Services', route: '', addedText: null }
];
const resources = [
    { text: 'Blog', route: '', addedText: null },
    { text: 'Product', route: '', addedText: null },
    { text: 'Services', route: '', addedText: null }
];


function Footer(){
    return (
        <footer>
            <div className="bottom-logo">
                <img 
                    src={logo}
                    alt="" 
                    height="41px" 
                    width="156px" />
                <p className="footer-text-1">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p className="footer-text-2">All rights reserved.</p>
            </div>

            <div className="bottom-links flex flex-wrap justify-around">
                <ul className="grid ">
                    <li>
                        Landings
                    </li>
                    {landings.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{ item.text }</a>
                        </li>
                    ))}
                </ul>
                <ul className="grid ">
                    <li>
                        Company
                    </li>
                    {company.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{ item.text }</a>
                            {item.addedText && <span className="highlighted">{ item?.addedText }</span>}
                        </li>
                    ))}
                </ul>
                <ul className="grid ">
                    <li>
                        Resources
                    </li>
                    {resources.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{ item.text }</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;