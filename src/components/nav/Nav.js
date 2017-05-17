import React from 'react';
import { Component } from 'react'
import RouterLink from '../router/Link';

const Navbar = () => {
    return (
         <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header"> 
                    <RouterLink to="/">  
                        <div>  
                            <p className="navbar-brand">Glicho</p>
                        </div>
                    </RouterLink>
                </div>
                <ul className="nav navbar-nav">
                    <li className="">
                        <RouterLink to="/addBook">  
                            <a>Add Book</a>
                        </RouterLink>
                    </li>
                </ul>
            </div>
         </nav>
    );
}

export default Navbar;
