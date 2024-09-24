import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import PuzzleImage from '../assets/heroPageElement.svg';

export default function Homepage() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" className='flex row space-between align_items_center'>
        <div id="heroTextSection" className='flex column'>
          <p className="heroHeadText">Get Ready for the Ultimate Fun!</p>
          <p className="heroSubText">Kick off your journey in the Math Premier League, where mathematics meets thrilling challenges! Gear up for exciting rounds like the Coding Relay, Treasure Hunt, and Jeopardy-style games, designed to test your skills and teamwork.</p>
          <div id="btnHolder" className='flex row align_items_center'>
            <Link to="/leaderboard"> {/* Wrap button in Link */}
              <button className='btn roundBtn purpleShade'>
                Leaderboard
              </button>
            </Link>
            {/* <p className='btnUnderline'>Create Your Team</p> */}
          </div>
        </div>
        <div id="heroImageSection" className='flex column centerVH'>
          <img id='puzzleImage' src={PuzzleImage} alt="Puzzle" />
        </div>
      </div>
    </div>
  );
}
