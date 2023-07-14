import React, { FC } from "react";
import { TodoItem } from "../../types";
import { Tags } from "../Tags";

interface ListProps {
  items: TodoItem[];
  onChangeItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

export const List: FC<ListProps> = ({ items, onChangeItem, onRemoveItem }) => {
  return (
    <>
      {items && items.length > 0
        ? items.map((item) => (
            <div key={item.id} className="block">
              <div className="paragraph" key={item.id}>
                <input
                  className="check"
                  id={item.id}
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => onChangeItem(item.id)}
                />
                <label className="label" htmlFor={item.id}>
                  {item.title}
                </label>
                <Tags tagCopy={item.tags} />
              </div>
              <span className="remove" onClick={() => onRemoveItem(item.id)}>
                Remove
              </span>
            </div>
          ))
        : "Items not found"}
    </>
  );
};
