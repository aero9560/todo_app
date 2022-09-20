import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <button onClick={() => setTodoEditing(task)}>Edit</button>
      <div className="space">
      </div>
      <button onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  );
};