import React from 'react';
import withSection from '../utils/withSection';
import WhiteContainer, {
  Title,
  PersonTitle,
  PersonCard,
  FullWidthContentContainer
} from '../components/WhiteContainer';

const Tokenization = ({ fullpageApi }) => {
  return (
    <WhiteContainer>
      <FullWidthContentContainer>
        <Title style={{ marginBottom: '52px' }}>People</Title>
        <PersonCard>
          <PersonTitle>CEO, Client Principal</PersonTitle>
          <p>
            <strong>Yulgan</strong> interprets and connects clients to Colb’s
            team and partners, applying a deep understanding of strategy and
            actions, and how they relate to the appropriate business channels. A
            lawyer and author of three legal books, he holds a master of law
            specializing in human rights and the prevention of international
            corruption from the Universidade Federal da Paraíba.
          </p>
          <p className="people-email">
            <a href="mailto:yulgan@colb.global">yulgan@colb.global</a>
          </p>
        </PersonCard>
        <PersonCard>
          <PersonTitle>COO, Project Principal</PersonTitle>
          <p>
            <strong>Caina</strong> leads the partners and teams through client
            projects with a passionate entrepreneurial spirit. She understands
            the complexities of roles, capabilities and the critical economics
            of time management. Her background includes 15 years of professional
            experience, over a decade of it in Project Management with a Swiss
            Private Bank. She holds a bachelor’s degree in Business
            Administration from the Haute école de gestion Fribourg,
            Switzerland.
          </p>
          <p className="people-email">
            <a href="mailto:caina@colb.global">caina@colb.global</a>
          </p>
        </PersonCard>
        <PersonCard>
          <PersonTitle>Expert</PersonTitle>
          <p>
            <strong>Yure</strong>’s intuition and creativity help him to design
            safe and sustainable business solutions by ensuring conformity with
            the correct legislation. He holds both a bachelor's degree in law
            from the Universidade Federal da Paraíba and a specialization in
            public law, corporate and tax law from the Universidade Cândido
            Mendes.
          </p>
          <p className="people-email">
            <a href="mailto:yure@colb.global">yure@colb.global</a>
          </p>
        </PersonCard>
        <PersonCard>
          <PersonTitle>Expert</PersonTitle>
          <p>
            <strong>Rodrigo</strong> possesses the talent and experience to
            design safe and sustainable forks, blockchain coins and tokens. He
            holds a bachelor's degree in mechanical engineering from the
            Polytechnic School of the University of São Paulo.
          </p>
          <p className="people-email">
            <a href="mailto:r.freitas@colb.global">r.freitas@colb.global</a>
          </p>
        </PersonCard>
  
      </FullWidthContentContainer>
    </WhiteContainer>
  );
};

export default withSection(Tokenization);
