import React from 'react';
import HopsLogo from '../HopsLogo/HopsLogo';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <div className="component-head">
                <h1>Technologies Used</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
      <div className="container">
        <div>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Sagas</li>
            <li>Email.js</li>
            <li>Moment.js</li>
            <li>Node</li>
            <li>Express</li>
            <li>Material-UI</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
