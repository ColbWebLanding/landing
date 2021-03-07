import React, { useState } from 'react';
import MenuContainer, { MenuList, MenuListItem } from './MenuContainer';

const Menu = () => {
  const [active, setActive] = useState(false);

  const _renderMenuIconColor = () => {
    if (active) {
      return 'black';
    }
    return '#ffdf00';
  };

  return (
    <div>
      <div
        className={`nav-icon ${active && 'open'}`}
        onClick={() => setActive(!active)}
      >
        <span style={{ backgroundColor: _renderMenuIconColor() }}></span>
        <span style={{ backgroundColor: _renderMenuIconColor() }}></span>
      </div>
      <MenuContainer
        style={{
          visibility: active ? 'visible' : 'hidden',
          opacity: active && 1
        }}
      >
        <MenuList>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page3">Welcome to Colb</MenuListItem>
            
          </li>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page5">Blockchain</MenuListItem>
          </li>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page7">Project Architecture</MenuListItem>
          </li>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page10">Tokenization</MenuListItem>
          </li>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page12">People</MenuListItem>
          </li>
          <li onClick={() => setActive(!active)} style={{ padding: '0.3em' }}>
            <MenuListItem href="#page14">Contacts</MenuListItem>
          </li>
        </MenuList>
      </MenuContainer>
    </div>
  );
};

export default Menu;
