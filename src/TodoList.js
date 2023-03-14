import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </i>
        <span>&emsp;</span>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
