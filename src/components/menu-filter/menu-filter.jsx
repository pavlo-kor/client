import React from 'react';
import './menu-filter.css';

const MenuFilter = ({ filter, onFilterChange }) => {

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'main', label: 'Main' },
    { name: 'side', label: 'Side' },
    { name: 'drinks', label: 'Drinks' }
  ];

  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => (
        <button
          key={name}
          type="button"
          className={`btn ${filter === name ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;