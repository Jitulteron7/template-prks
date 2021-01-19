import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"
const navBar=()=>{
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="rightSide">
                        <div>Menu</div>
                        <Link to="/">Pariksha</Link>
                    </div>
                    <div className="leftSide">
                        <div className="add">
                            Add
                        </div>
                    </div>
                </nav>
            </header>
        </>)

}

export default navBar;