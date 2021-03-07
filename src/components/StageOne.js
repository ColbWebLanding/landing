import React from 'react';
import { TabTitle, SectionTitle } from './TabContainer';

const StageOne = () => {
  return (
    <>
      <TabTitle>Venture Rising</TabTitle>
      <SectionTitle>Regulatory</SectionTitle>
      <ul>
        <li>
          <p>Business structure</p>
        </li>
        <li>
          <p>Legal certainity</p>
        </li>
        <li>
          <p>Bodies interaction</p>
        </li>
        <li>
          <p>Tax planning</p>
        </li>
      </ul>
      <SectionTitle>Financial</SectionTitle>
      <ul>
        <li>
          <p>Costs analysis</p>
        </li>
        <li>
          <p>Key performance indicators</p>
        </li>
        <li>
          <p>Financial projections</p>
        </li>
        <li>
          <p>Valutation</p>
        </li>
      </ul>
      <SectionTitle>M&amp;C</SectionTitle>
      <ul>
        <li>
          <p>Company goals</p>
        </li>
        <li>
          <p>Market descriptions</p>
        </li>
        <li>
          <p>Customer segments</p>
        </li>
        <li>
          <p>Competitive advantage</p>
        </li>
        <li>
          <p>Marketing plan</p>
        </li>
        <li>
          <p>Business image &amp; credibility, halo effect</p>
        </li>
        <li>
          <p>Communication regulation standards</p>
        </li>
      </ul>
      <SectionTitle>Technology</SectionTitle>
      <ul>
        <li>
          <p>Protocol DLT</p>
        </li>
        <li>
          <p>Blockchain</p>
        </li>
        <li>
          <p>Forks</p>
        </li>
        <li>
          <p>Token or Coin definition</p>
        </li>
      </ul>
    </>
  );
};

export default StageOne;
