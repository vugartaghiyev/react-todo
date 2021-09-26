import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import Footer from "./Footer";
import Item from "./Item";

const List = () => {
  const { list, filterType } = useContext(Context);
  const [filtered, seyFiltered] = useState(list);

  useEffect(() => {
    if (filterType === "active") {
      let f = list.filter((item) => !item.completed);
      seyFiltered(f);
    } else if (filterType === "completed") {
      let f = list.filter((item) => item.completed);
      seyFiltered(f);
    } else {
      seyFiltered(list);
    }
  }, [list, filterType]);

  return (
    <section className="main">
      <ul className="todo-list">
        {filtered.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <Footer itemCount={filtered.length} />
    </section>
  );
};

export default List;
