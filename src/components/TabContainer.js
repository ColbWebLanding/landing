import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
  color: black;
  word-break: break-word;
`;

export const BarContainer = styled.div`
  display: flex;
  border-bottom: 0.4px solid black;
`;

export const BarButton = styled.a`
  text-decoration: none;
  padding: 10px 15px;
`;

export const TabTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 25px;
  font-weight: 100;
  font-size: 2em;
`;

export const SectionTitle = styled.h2`
  font-weight: 100;
  font-size: 1em;
  margin-bottom: 0;
`;

export const ContentContainer = styled.div`
  min-height: 950px;
`;

export default TabContainer;
