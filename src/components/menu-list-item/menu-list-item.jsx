

import './menu-list-item.css';

const MenuListItem = (props) => {

  const {name, desc} = props;

  return (
    <div>
      <li className="li list-group-item d-flex justify-content-between">
        <img src="https://via.placeholder.com/150" alt="Menu item" />
        <div className="controls">
          <div>
            <h3>{name}</h3>
            <span>{desc}</span>
          </div>
          <div class="input-group mb-1">
            <button class="btn btn-danger" type="button">-</button>
            <input  type="text" 
                    class="form-control" 
                    placeholder="0" />
            <button class="btn btn-success" type="button">+</button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default MenuListItem;