import React, { Component }from "react";

import SearchPanel from "../../components/search-panel";
import MenuFilter from "../../components/menu-filter";
import MenuList from "../../components/menu-list";

export default class Menu extends Component {
    
    state = {
        menuData: [
            {name: 'Salo', desc: 'Pork fat(no)', id: 1},
            {name: 'Borsch', desc: 'A sour soup, made with meat stock, vegetables and seasonings', id: 2},
            {name: 'Fisting', desc: '300$', id: 3},
            {name: 'Carbonara', desc: 'A pasta dish made with fatty cured pork, hard cheese, eggs', id: 4}
        ]
    } 
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <SearchPanel></SearchPanel>
                <MenuFilter></MenuFilter>
                <MenuList data={this.state.menuData}></MenuList>
            </div>
        );
    }
}
