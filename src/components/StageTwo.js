import React from 'react';
import { TabTitle, SectionTitle } from './TabContainer';

const StageTwo = () => {
  return (
    <>
      <TabTitle>Capital Rising</TabTitle>
      <SectionTitle>Regulatory</SectionTitle>
      <ul>
        <li>
          <p>Advice</p>
        </li>
        <li>
          <p>Due diligence</p>
        </li>
      </ul>
      <SectionTitle>Financial</SectionTitle>
      <ul>
        <li>
          <p>Strategy</p>
        </li>
        <li>
          <p>Equity, token or coin pricing</p>
        </li>
        <li>
          <p>Underwriting</p>
        </li>
        <li>
          <p>Investor's KYC and sustainability policy</p>
        </li>
        <li>
          <p>Roadshow</p>
        </li>
      </ul>
      <SectionTitle>M&amp;C</SectionTitle>
      <ul>
        <li>
          <p>Vehicle analysis, &amp; coordination</p>
        </li>
        <li>
          <p>Investor segments communication</p>
        </li>
        <li>
          <p>Communication materials &amp; whitepapers</p>
        </li>
        <li>
          <p>Communication regulation proof</p>
        </li>
        <li>
          <p>Roadshow coordination</p>
        </li>
      </ul>
      <SectionTitle>Technology</SectionTitle>
      <ul>
        <li>
          <p> Protocol DLT, blockchain, forks, token or coin design &amp; creation</p>
        </li>
        <li>
          <p>Asset tokenisazion</p>
        </li>
        <li>
          <p>Tokenomics &amp; yellow papers</p>
        </li>
        <li>
          <p>Smart contract</p>
        </li>
      </ul>
    </>
  );
};

export default StageTwo;
