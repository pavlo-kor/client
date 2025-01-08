import React, { Component } from "react";
import TodoList from "../../components/todo-list";

import "./orders.css";

export default class Orders extends Component {
  
  state = {
    orderData: [
      {name: 'Salo', id: 1},
      {name: 'Borsch', id: 2},
      {name: 'Fisting', id: 3},
      {name: 'Carbonara', id: 4}
    ]
  }

  render() {
    return (
      <div>
        <h2>Orders list</h2>
        <span>3 orders to do</span>
        <TodoList data={this.state.orderData}>
          
        </TodoList>
      </div>
    );
  }
  
}
