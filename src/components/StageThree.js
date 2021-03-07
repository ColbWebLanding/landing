import React from 'react';
import { TabTitle, SectionTitle } from './TabContainer';

const StageThree = () => {
  return (
    <>
      <TabTitle>Oversight</TabTitle>
      <SectionTitle>Regulatory</SectionTitle>
      <ul>
        <li>
          <p>Diagnostic</p>
        </li>
        <li>
          <p>Rules, controls, polities, and resolutions</p>
        </li>
        <li>
          <p>AML/FT</p>
        </li>
         <li>
          <p>Tax compliance policy</p>
        </li>
        <li>
          <p>Governance policies</p>
        </li>
      </ul>
      <SectionTitle>Financial</SectionTitle>
      <ul>
        <li>
          <p>Business KYC</p>
        </li>
         <li>
          <p>Sustainability policy strategy</p>
        </li>
      </ul>
      <SectionTitle>M&amp;C</SectionTitle>
      <ul>
        <li>
          <p>Responsability: peer-to-peer communication improvements</p>
        </li>
      </ul>
      <SectionTitle>Technology</SectionTitle>
      <ul>
        <li>
          <p>Trasparency: shared distributed leadgers</p>
        </li>
        <li>
          <p>Accountability: irriversability of records</p>
        </li>
      </ul>
    </>
  );
};

export default StageThree;
