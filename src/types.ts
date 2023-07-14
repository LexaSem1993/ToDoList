export interface TodoItem {
  id: string;
  title: string;
  isChecked: boolean;
  tags: TagItem[];
}
export interface TagItem {
  title: string;
  isActive: boolean;
}
