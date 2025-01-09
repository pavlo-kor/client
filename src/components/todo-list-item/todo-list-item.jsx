import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  render() {

    const { name, 
            done, 
            cancel, 
            onToggleDone, 
            onToggleCancel } = this.props;

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
                  onClick={onToggleCancel}>
                  Cancel
          </button>
          <span className={classNames}
                >
                {name}
          </span>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onToggleDone}>
                  Ready
          </button>
        </li>
      </div>
    );
  }
}
