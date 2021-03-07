import React, { useState } from 'react';
import withSection from '../utils/withSection';
import TabContainer, {
  BarContainer,
  BarButton,
  ContentContainer
} from '../components/TabContainer';
import StageOne from '../components/StageOne';
import StageTwo from '../components/StageTwo';
import StageThree from '../components/StageThree';

const Stages = ({ fullpageApi }) => {
  const [currentStage, setCurrentStage] = useState(1);

  const _renderContent = () => {
    switch (currentStage) {
      case 1:
        return <StageOne />;
      case 2:
        return <StageTwo />;
      default:
        return <StageThree />;
    }
  };

  const _renderActive = id => {
    if (id === currentStage) {
      return {
        textDecoration: 'underline',
        textDecorationColor: '#ffdf00',
        textUnderlinePosition: 'under'
      };
    }
  };

  return (
    <div className="tab-container">
      <TabContainer>
        <BarContainer>
          <BarButton
            style={_renderActive(1)}
            onClick={() => setCurrentStage(1)}
          >
            Stage 1
          </BarButton>
          <BarButton
            style={_renderActive(2)}
            onClick={() => setCurrentStage(2)}
          >
            Stage 2
          </BarButton>
          <BarButton
            style={_renderActive(3)}
            onClick={() => setCurrentStage(3)}
          >
            Stage 3
          </BarButton>
        </BarContainer>
        <ContentContainer>{_renderContent()}</ContentContainer>
      </TabContainer>
    </div>
  );
};

export default withSection(Stages);
