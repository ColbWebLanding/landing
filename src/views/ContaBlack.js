import React from 'react';
import withSection from '../utils/withSection';
import BlackContainer from '../components/BlackContainer';

const ContaBlack = () => {
  return (
    <BlackContainer>
      <div className="text-align-center-container">
        <p className="text-align-center">
          "Colb has given us the critical tools necessary to </p><p className="text-align-center" style={{ padding: '0.3em' }}>support our
          business model, strategies which</p><p className="text-align-center" style={{ padding: '0.3em' }}> help us to uphold our mission. It
          enables </p><p className="text-align-center" style={{ padding: '0.3em' }}>Conta Black to offer a more equal and inclusive </p><p className="text-align-center" style={{ padding: '0.3em' }}>financial
          market for everyone, especially those </p><p className="text-align-center" style={{ padding: '0.3em' }}>left out of the system: the
          unbankings."
        </p>
        <p className="author text-align-center" style={{ marginTop: '0.3em' }}>Sergio All / CEO, Founder</p>
        <p className="author text-align-center" style={{ marginTop: '0.2em' }}>
          contablack
        </p>
      </div>
    </BlackContainer>
  );
};

export default withSection(ContaBlack);
