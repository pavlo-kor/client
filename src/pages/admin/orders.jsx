import React, { Component } from "react";
import TodoList from "../../components/todo-list";

import "./orders.css";

export default class Orders extends Component {
  
  state = {
    orderData: [
      { name: 'Salo', id: 1, done: false, cancel: false },
      { name: 'Borsch', id: 2, done: false, cancel: false },
      { name: 'Fisting', id: 3, done: false, cancel: false },
      { name: 'Carbonara', id: 4, done: false, cancel: false }
    ]
  }

  onToggleDone = (id) => {
    this.setState(({ orderData }) => ({
      orderData: orderData.map(item => 
        item.id === id ? { ...item, done: !item.done } : item
      )
    }));
  };

  onToggleCancel = (id) => {
    this.setState(({ orderData }) => ({
      orderData: orderData.map(item => 
        item.id === id ? { ...item, cancel: !item.cancel } : item
      )
    }));
  };

  render() {
    const { orderData } = this.state;
    const ordersToDo = orderData.filter(item => !item.done && !item.cancel).length;
    
    return (
      <div>
        <h2>Orders list</h2>
        <span>{ordersToDo} orders to do</span>
        <TodoList data={this.state.orderData}
                  onToggleDone={this.onToggleDone}
                  onToggleCancel={this.onToggleCancel}>
        </TodoList>
      </div>
    );
  }
  
}
