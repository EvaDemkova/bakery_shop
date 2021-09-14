import React from 'react';
import './style.css';

const OpeningHours = () => {
  return (
    <div className="opening-hours item-8">
      <h4>Opening Hours</h4>
      <ul>
        <li>
          <span>Monday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Tuesday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Wednesday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Thursday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Friday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Saturday</span>
          <span>6:00 - 18:00</span>
        </li>
        <li>
          <span>Sunday</span>
          <span>6:00 - 18:00</span>
        </li>
      </ul>

      <div>
        <span>Our e-shop</span>
        <span>ALWAYS</span>
      </div>
    </div>
  );
};

export default OpeningHours;
