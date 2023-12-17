import React from 'react'
import { MenuItemModel } from '../../../Interfaces'

interface Props {
  menuItem: MenuItemModel;
}

function MenuItemCard(props: Props) {
  return (
    <div>
      {props.menuItem.name}
    </div>
  )
}

export default MenuItemCard