import React, { useContext, useState } from "react";
import { Context } from "../Context";

import { ADD_ITEM_TO_LIST } from "../Context/actions";

const Header = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text !== "") {
      dispatch({ type: ADD_ITEM_TO_LIST, payload: text });
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
