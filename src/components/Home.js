import React from 'react';
import './Home.css';
import krish from './krish.png';
import Intro from './Intro';
import { useState, useEffect } from 'react';
import Typing from './Typing';

function Home() {
  // const texts = ['Software Developer', 'Innovator', 'Player'];
  // const [currentText, setCurrentText] = useState('');
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   let intervalId;

  //   if (isDeleting) {
  //     intervalId = setInterval(() => {
  //       setCurrentText(prev => {
  //         if (prev.length > 0) {
  //           return prev.slice(0, -1);
  //         } else {
  //           setIsDeleting(false);
  //           setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
  //           return prev;
  //         }
  //       });
  //     }, 60); // Deleting speed
  //   } else {
  //     intervalId = setInterval(() => {
  //       setCurrentText(prev => {
  //         const nextText = texts[currentTextIndex];
  //         if (prev.length < nextText.length) {
  //           return nextText.slice(0, prev.length + 1);
  //         } else {
  //           setTimeout(() => {
  //             setIsDeleting(true);
  //           }, 2000); // Time to display the full text before deleting starts
  //           clearInterval(intervalId);
  //           return prev;
  //         }
  //       });
  //     }, 100); // Adding speed
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isDeleting, currentTextIndex, texts]);



  return (
    <>
    <section className="home">
            <div className="home-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">Krishna Patidar</span></h1>
                {/* <p className='position'>{currentText}</p> */}
                <Typing 
                text= {['Software Developer', 'Innovator', 'Player']}
                typingSpeed = {100}
                deletingSpeed = {60}
                duration = {1000}


                />
            </div>
            <div className="home-image">
                <img src={krish} alt="Krishna's Image" />
            </div>
    </section>
    <Intro/>
    </>
  );
}

export default Home;