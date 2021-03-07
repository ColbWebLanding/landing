import React from 'react';
import withSection from '../utils/withSection';
import BlackContainer from '../components/BlackContainer';

const Darwin = () => {
  return (
    <BlackContainer>
      <div className="text-align-center-container">
        <p className="text-align-center">
          "It is not the strongest of the species that survives, nor the most
          intelligent that survives. It is the one that is most adaptable to
          change."
        </p>
        <p className="text-align-center author">Darwin</p>
      </div>
    </BlackContainer>
  );
};

export default withSection(Darwin);
