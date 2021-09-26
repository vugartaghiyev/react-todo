import React, { useContext } from "react";
import { Context } from "../Context";

import { SET_FILTER_TYPE, CLEAR_COMPLETED } from "../Context/actions";

const Footer = ({ itemCount }) => {
  const { dispatch, filterType, list } = useContext(Context);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemCount} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <span
            onClick={() => dispatch({ type: SET_FILTER_TYPE, payload: "all" })}
            className={filterType === "all" ? "selected" : ""}
          >
            All
          </span>
        </li>
        <li>
          <span
            onClick={() =>
              dispatch({ type: SET_FILTER_TYPE, payload: "active" })
            }
            className={filterType === "active" ? "selected" : ""}
          >
            Active
          </span>
        </li>
        <li>
          <span
            onClick={() =>
              dispatch({ type: SET_FILTER_TYPE, payload: "completed" })
            }
            className={filterType === "completed" ? "selected" : ""}
          >
            Completed
          </span>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch({ type: CLEAR_COMPLETED })}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
