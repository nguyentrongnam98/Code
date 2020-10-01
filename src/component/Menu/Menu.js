import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
const menus = [
    {
        name:'Trang chu',
        to:'/',
        exact:true
    },
    {
        name:'Quan ly san pham',
        to:'/product-list',
        exact:false
    }
]
const MenuLink = ({label,to,active})=>{
    return(
        <Route
          path={to}
          exact={active}
          children={({match})=>{
             var active = match ? 'active':'';
             return(
             <li className = {active}>
                 <Link to = {to}>{label}</Link>
             </li>
             )
          }}
        />
    )
}
class Menu extends Component {
    showMenu = (menus)=>{
        var result =null;
        if(menus.length > 0){
            result = menus.map((menu,index)=>{
                return (
                <MenuLink key={index} 
                to={menu.to}
                label = {menu.name}
                active = {menu.exact}
                />
            )})
        }
      return result;
    }
    render() {
        return (
            <div className="navbar">
            <a className="navbar-brand">Title</a>
            <ul className="nav navbar-nav">
             {this.showMenu(menus)}
            </ul>
          </div>
        );
    }
}

export default Menu;
