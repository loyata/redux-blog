import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li className={"list"}><Link to="/">Home</Link></li>
                    <li className={"list"}><Link to="posts/new">Make a post</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;