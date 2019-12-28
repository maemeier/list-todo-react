import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class TodoItem extends React.Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-secondary" onClick={handleEdit}>
              <FontAwesomeIcon icon={faPen} />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
