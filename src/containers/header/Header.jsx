import React from 'react';
import people from '../../assets/people.png';
import metro from '../../assets/metro.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-image">
      <img src={metro} />
    </div>
    <div className="gpt3__header-content">
      <h1 className="gradient__text" style={{ marginLeft: 55 }}>METROBUDDY</h1>
      <p className="p" style={{ marginLeft: 35 }}>Your buddy for travel so that you never get stuck in finding the right exit gate.</p>

      <div className="gpt3__header-content__input">
        <input type="text" placeholder="Enter your destination" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

  </div>
);

export default Header;
