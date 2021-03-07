import React from 'react';
import withSection from '../utils/withSection';
import BlackContainer from '../components/BlackContainer';

const Home = () => {
  return (
    <BlackContainer>
      <div className="text-align-center-container">
        <p className="text-align-center">
        Blockchain is where there's still unbroken ground, unwritten stories and undiscovered opportunities.
        </p>
      </div>
    </BlackContainer>
  );
};

export default withSection(Home);
