import React, { Component } from 'react';

import './menu-filter.css'

export default class MenuFilter extends Component {

  render() {
    return (
      <div className="btn-group">
        <button 
          className="btn btn-light"
          type="button">
            Main
        </button>
        <button 
          className="btn btn-light"
          type="button">
            Side
        </button>
        <button 
          className="btn btn-light"
          type="button">
            Drinks
        </button>
      </div>
    )
  }
}
