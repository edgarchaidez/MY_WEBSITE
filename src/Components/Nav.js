import React from 'react';
import "./Nav.css";

const nav = (props) => {
    return(
        <div>
    <nav className="HeaderNav">
        <div area-hidden="false">
            <ul className="NavUl" >
                <li className="NavLi">
                    <h3>
                        <a className="NavLi_item js-active" href="/">
                            About
                        </a>
                    </h3>
                </li>
                <li className="NavLi">
                    <a onClick={props.click} className="NavLi_item" >
                    <h3 >
                        Portfolio
                    </h3>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
}

export default nav;