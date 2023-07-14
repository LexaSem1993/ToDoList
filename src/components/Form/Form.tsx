import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
//@ts-ignore
import { v4 as faceId } from "uuid";
import "./form.css";
import { TodoItem } from "../../types";

import { Tags } from "../Tags";
import { tags } from "../Tags/constants";

interface FormProps {
  onSubmit: (item: TodoItem) => void;
}

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [title, setTitle] = React.useState("");

  const [tagCopy, setTagsCopy] = useState(tags);

  const onActiveTags = (title: string) => {
    const nextItems = tagCopy.map((el) =>
      el.title === title ? { ...el, isActive: !el.isActive } : el
    );
    console.log(title);
    setTagsCopy(nextItems);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    if (!title && title.length === 0) {
      return;
    }

    const item: TodoItem = {
      id: faceId(),
      title,
      isChecked: false,
      tags: tagCopy.filter((item) => item.isActive),
    };

    onSubmit(item);

    setTitle("");
  };

  const handleChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__inputs">
          <label className="label">Todo</label>
          <input
            id="input"
            type="text"
            required
            value={title}
            placeholder="Enter Word"
            onChange={handleChangeTag}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
      <Tags tagCopy={tagCopy} onActiveTags={onActiveTags} />
    </>
  );
};
