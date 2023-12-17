import React from 'react'
import { useState,useEffect } from 'react';
import { MenuItemModel } from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';

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
    <div className='container row'>
      {menuItems.length>0 && menuItems.map((menuItem,index)=>(
        <MenuItemCard menuItem={menuItem} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList