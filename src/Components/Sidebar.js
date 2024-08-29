import React from "react";
import './Sidebar.css';
import logo from './Assets/logo.png';

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="icons">
                <i class="fa-solid fa-users"></i>
                <h2>Student Management</h2>
            </div>
            <div className="icons">
                <i class="fa-solid fa-inbox"></i>
                <h2>Financial Management</h2>
            </div>
            <div className="icons">
                <i class="fa-solid fa-certificate"></i>
                <h2>Quality Control</h2>
            </div>
            <div className="icons">
                <i class="fa-solid fa-grip"></i>
                <h2>Report Delivery</h2>
            </div>
            <div className="icons">
                <i class="fa-solid fa-square-poll-vertical"></i>
                <h2>Attendance</h2>
            </div>
            <div className="tools">
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    );
}

export default Sidebar;