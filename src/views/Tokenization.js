import React from 'react';
import withSection from '../utils/withSection';
import WhiteContainer, {
  Title,
  ContentContainer,
  ContentLine
} from '../components/WhiteContainer';

const Tokenization = ({ fullpageApi }) => {
  return (
    <WhiteContainer>
      <ContentContainer>
        <Title>Tokenization</Title>
        <ContentLine>
        Tokenisation is the process of creating extrinsic value tokens, and allowing them to represent the rights over the
        underlying asset. The process is, essentially, the fragmentation of rights into digital parts negotiable on the blockchain.
        </ContentLine>
        <ContentLine>
        Tokenisation, the Colb way.
        We’re on a mission to do things differently. We offer a disruptive funding route to raise capital globally, safely and publicly.
        Tokenisation at Colb means diligent onboarding, an assertive offer strategy, and an appropriate structure for token issue and distribution.{"\n"}
        </ContentLine>
        <div>
        <p></p>
        - We design a tailor-made issuance strategy. Unique to your project, maximising visibility and viability.<p></p>
          - We select unique investment opportunities that offers economic rights and generates returns.<p></p>
          - We create trust and break down barriers to access and empower asset holders and investors.<p></p>
          - We bring curated, compliant, trustworthy and diversified attractive security tokens, ready to be listed.<p></p>
       
      </div>
       

       
      </ContentContainer>
    </WhiteContainer>
  );
};

export default withSection(Tokenization);
