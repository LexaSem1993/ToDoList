import React, { useState } from "react";

import { Form } from "./components/Form";

import { List } from "./components/List";
import { TodoItem } from "./types";
//import { TagItem } from "./types";

function App() {
  const localItem = JSON.parse(localStorage.getItem("items") || "") || null;

  const items_ = localItem && localItem.length > 0 ? localItem : [];

  const [items, setItems] = useState<TodoItem[]>(items_ || []);

  //const [tags, setTags] = useState<TagItem[]>();

  const handleSubmit = (item: TodoItem) => {
    const nextItems = [...items, item];
    setItems(nextItems);
  };
  // const handleChangeItem = (index: number) => {
  //   const nextItems = [...items];
  //   nextItems[index].isChecked = !nextItems[index].isChecked;
  //   setItems(nextItems);
  // };
  const handleChangeItem = (id: string) => {
    const nextItems = items.map((el) => (el.id === id ? { ...el } : el));
    setItems(nextItems);
  };
  const handleRemoveItem = (id: string) => {
    const nextItems = [...items];

    const indexForRemove = nextItems.findIndex((el) => el.id === id);

    nextItems.splice(indexForRemove, 1);
    setItems(nextItems);
  };

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}

export default App;
