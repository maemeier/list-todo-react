import React from "react";
import TodoItem from "./todoItem";
import Item from "./todoItem";

class TodoList extends React.Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ul className="list-group  my-5">
          {" "}
          <h3 className="text-capitalzie text-center">Todo List</h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="btn btn-danger btn-block text-uppercase mt-5"
            onClick={handleClearList}
          >
            Clear list
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
