import React from 'react';

const withSection = Component => {
  return function WithSectionComponent({ ...props }) {
    return (
      <div className="section">
        <Component {...props} />
      </div>
    );
  };
};

export default withSection;
