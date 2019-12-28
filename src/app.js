import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
class App extends Component {
  state = {
    items: [
      { id: 1, title: "Steal Robert's shoes" },
      { id: 2, title: "Kidnap Jeff's dog" },
      { id: 3, title: "Hack Edgard's github" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  handleClearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const fitleredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: fitleredItems
    });
  };
  handleEdit = id => {
    console.log(`edit edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
