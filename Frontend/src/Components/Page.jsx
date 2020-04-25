import React, { Component } from 'react';
import Navbar from './Navbar';

import './Page.css';

function Page(props) {
    return (
        <div className="page-layout-navbar">
            <div className="page-nav-wrap">
                <Navbar />
            </div>
            <div className="page-layout-content">
                {props.content}
            </div>
        </div>
    )
    }

export default Page;