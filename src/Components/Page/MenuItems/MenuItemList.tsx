import React from 'react'
import { useState,useEffect } from 'react';
import { MenuItemModel } from '../../../Interfaces';

function MenuItemList() {

  const [menuItems, setMenuItems] = useState<MenuItemModel[]>([]);

  useEffect(()=>{
    fetch("https://redmangoapi.azurewebsites.net/api/MenuItem")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setMenuItems(data.result)
    })
  },[]);

  return (
    <div>MenuItemList</div>
  )
}

export default MenuItemList