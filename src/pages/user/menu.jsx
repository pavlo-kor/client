import React, { Component }from "react";

import SearchPanel from "../../components/search-panel";
import MenuFilter from "../../components/menu-filter";
import MenuList from "../../components/menu-list";

export default class Menu extends Component {
    
    state = {
        menuData: [
            {name: 'Salo', desc: 'Pork fat(no)', category: 'side' , id: 1},
            {name: 'Borsch', desc: 'A sour soup, made with meat stock, vegetables and seasonings', category: 'main', id: 2},
            {name: 'Fisting', desc: '300$', category: 'main', id: 3},
            {name: 'Carbonara', desc: 'A pasta dish made with fatty cured pork, hard cheese, eggs', category: 'side' , id: 4},
            {name: 'Cola', desc: 'Refreshing carbonated drink', id: 5, category: 'drinks'}
        ],
        term: '',
        filter: 'all' // main, side, drinks
    } 

    onSearchChange = (term) => {
        this.setState({term})
    }
    
    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search(items, term, filter) {
        let filteredItems = items;

        if (filter !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === filter);
        }
    
        if (term.length > 0) {
            filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term.toLowerCase())
            );
        }
    
        return filteredItems;
    }

    filter(items, filter) {
        switch(filter) {
            case 'main':
                return items.main;
            case 'side':
                return items.side;
            case 'drinks':
                return items.drinks;
            default:
                return items;
        }
    }

    render() {
        const {menuData, term, filter} = this.state;
        const visibleItems = this.search(menuData, term, filter);

        return (
            <div>
                <h2>Menu</h2>
                <SearchPanel
                    term={term}
                    onSearchChange={this.onSearchChange}>                    
                </SearchPanel>
                <MenuFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}>
                </MenuFilter>
                <MenuList data={visibleItems}></MenuList>
            </div>
        );
    }
}
