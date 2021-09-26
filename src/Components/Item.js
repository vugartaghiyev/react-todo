import React, { useContext } from "react";
import { Context } from "../Context";

import { REMOVE_ITEM_FROM_LIST, COMPLETE_ITEM } from "../Context/actions";

const Item = ({ item }) => {
  const { dispatch } = useContext(Context);

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM_FROM_LIST, payload: item.id });
  };

  const itemStyle = item.completed ? "completed" : "";
  return (
    <li className={itemStyle}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={item.completed}
          onChange={() => dispatch({ type: COMPLETE_ITEM, payload: item.id })}
        />
        <label>{item.text}</label>
        <button className="destroy" onClick={() => removeItem()}></button>
      </div>
    </li>
  );
};

export default Item;
