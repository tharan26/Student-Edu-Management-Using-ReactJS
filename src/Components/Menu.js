import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="name">Regular Enrollment</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-book-open"></i>
          </div>
          <div className="name">Remedial Enrollment</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="name">Club Management</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="name">Classroom Management</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="name">SMS / EMAIL</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-chart-bar"></i>
          </div>
          <div className="name">Attendance</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <i className="fas fa-hospital"></i>
          </div>
          <div className="name">Clinic</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
