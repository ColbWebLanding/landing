import React from 'react';
import withSection from '../utils/withSection';
import {
  ContentLine,
  WhiteCenteredContainer
} from '../components/WhiteContainer';

const Tokenization = ({ fullpageApi }) => {
  return (
    <WhiteCenteredContainer>
      <div style={{ maxWidth: '600px', alignSelf: 'center', padding: '5%' }}>
        <ContentLine className="text-align-center">
          We conceptualize, plan and create tailor-made solutions. Each stage in
          every project is informed by Colb’s proprietary 4 Pillars methodology.
        </ContentLine>
      </div>
    </WhiteCenteredContainer>
  );
};

export default withSection(Tokenization);
