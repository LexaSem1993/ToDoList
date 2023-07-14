import React, { FC } from "react";

import { tags } from "./constants";

import "./tags.css";
import { TagItem } from "../../types";

interface TagsProps {
  tagCopy?: TagItem[];
  onActiveTags?: (id: string) => void;
}

export const Tags: FC<TagsProps> = ({ tagCopy = tags, onActiveTags }) => {
  return (
    <div className="tags__container">
      {tagCopy.map((item) => (
        <span
          onClick={() => onActiveTags && onActiveTags(item.title)}
          className={`${item.isActive ? "active" : ""} tags`}
          key={item.title}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};
