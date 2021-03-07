import styled from 'styled-components';

const WhiteContainer = styled.div`
  padding: 5%;
  
  display: flex;
  font-size: 28px;
  justify-content: center;
  min-height: 100vh;
  color: #141414;
  background-color: white;
`;

export const WhiteCenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 100;
  font-size: 2em;
`;

export const ContentContainer = styled.div`
  max-width: 800px;
`;

export const ContentLine = styled.p`
  margin: 0;
`;

export const FullWidthContentContainer = styled.div`
  width: 100%;
`;

export const PersonTitle = styled.h3`
  margin: 0;
  margin-top: 20px;
  font-weight: normal;
  font-size: 1em;
`;

export const PersonCard = styled.div`
  border-bottom: 1px solid black;
`;

export default WhiteContainer;
