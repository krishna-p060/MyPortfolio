import React from 'react';
import './Home.css';
import krish from './krish.png';
import Intro from './Intro';

function Home() {
  return (
    <>
    <section className="home">
            <div className="home-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">Krishna Patidar</span></h1>
                <p>Software Developer</p>
            </div>
            <div className="home-image">
                <img src={krish} alt="Astronaut" />
            </div>
    </section>
    <Intro/>
    </>
  );
}

export default Home;