import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    cancel: false, 
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }

  cancelOrder = () => {
    this.setState(({cancel}) => {
      return {
        cancel: !cancel
      } 
    })
  }
  render() {

    const { done, cancel } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'
    }

    if (cancel) {
      classNames += ' cancel'
    }

    return (
      <div>
        <li className="list-group-item d-flex justify-content-between">
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={this.cancelOrder}>
                  Cancel
          </button>
          <span className={classNames}
                >
                {this.props.name}
          </span>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={this.onLabelClick}>
                  Ready
          </button>
        </li>
      </div>
    );
  }
}
