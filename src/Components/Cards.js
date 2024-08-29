import React, { useState } from 'react';
import './Cards.css';

const Cards = () => {
  const [add, setthree] = useState(0);
  const [one, setone] = useState(8);
  const [two, settwo] = useState(13);

  return (
    <div className="cards-container">
      <div className="start-box red" onClick={() => setone(one + 1)}>
        <i className="fa-solid fa-user-graduate icon"></i> 
        <div className="start-number">{one}</div>
        <div className="start-title">Regular Students</div>
      </div>
      <div className="start-box purple" onClick={() => settwo(two + 1)}>
        <i className="fa-solid fa-book-open icon"></i> 
        <div className="start-number">{two}</div>
        <div className="start-title">Remedial Students</div>
      </div>
      <div className="start-box green" onClick={() => setthree(add + 1)}>
        <i class="fa-solid fa-person-circle-check"></i> 
        <div className="start-number">{add}</div>
        <div className="start-title">In Paid Clubs</div>
      </div>
    </div>
  );
}

export default Cards;
