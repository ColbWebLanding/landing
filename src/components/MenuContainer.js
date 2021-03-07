import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #ffdf00;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 2;
  transition: all 400ms ease-in-out;
  trasition-delay: 400ms;
`;

export const MenuList = styled.ul`
  text-align: center;
  padding: 0;
  font-size: 30px;
  margin: 0;
  margin-bottom: 5px;
  @supports (-webkit-touch-callout: none) {
    margin-bottom: 60px;
  }
`;

export const MenuListItem = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default MenuContainer;
