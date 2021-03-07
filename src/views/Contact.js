import React from 'react';
import withSection from '../utils/withSection';
import { ContentContainer, ContentLine } from '../components/WhiteContainer';

const Tokenization = ({ fullpageApi }) => {
  return (
    <div style={{ padding: '10%' }}>
      <ContentContainer>
        <ContentLine style={{ marginBottom: '15px' }}>
          <a href="mailto:hi@colb.global">hi@colb.global</a>
        </ContentLine>

        <ContentLine>Colb Asset SA Rue de l'Athénée 4 1205 Geneva</ContentLine>
        <ContentLine>Colb Blockchain Experts Ltda Rua Cayowaá 1071 05018-001 Perdizes, São Paulo</ContentLine>
      </ContentContainer>
    </div>
  );
};

export default withSection(Tokenization);
