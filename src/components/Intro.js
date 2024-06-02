import React from 'react';
import './Intro.css';
// import krish from './krish.png';

function Intro() {
  return (
    <section className="intro">
            <div className="intro-text">
                <h1>Brief <span>introduction</span></h1>
                <p>
                    I love the process of changing a raw idea into a website or a product that impacts lives. I want to
                    do work that challenges me as a developer & work that I can be proud of.
                </p>
                <p>
                    I am fluent in <span>C++</span> and know a bit of <span>Python</span> and am working on a few
                    projects in the <span>MERN</span> stack.
                    I plan to learn <span>Next.js, Three.js</span> and <span>Typescript</span> in the near future.
                </p>
                <p>
                    Also, I love <span>coffee</span>🥤
                </p>

            </div>
            <div className="intro-image">
                {/* <img src={krish} alt="krishna's photo"/> */}
            </div>
        </section>
  );
}

export default Intro;