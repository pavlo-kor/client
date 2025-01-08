import React from "react";

import MenuListItem from '../menu-list-item';
import './menu-list.css';

const MenuList = ({data = []}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <MenuListItem key={id} {...itemProps}></MenuListItem>
    )
  })

  return (
    <div>
      <ul className="list-group mx-auto">
        {elements}
      </ul>
    </div>
  )
}

export default MenuList;

