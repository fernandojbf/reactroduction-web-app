import React, { Component } from 'react';
import Button from '../Button';
import './style.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleClose() {
    this.setState(() => ({
      open: false,
    }));
  };

  handleOpen() {
    this.setState(() => ({
      open: true,
    }));
  };

  handleAddTodo() {
    if (this.input.value) {
      this.props.saveTodo({
        label: this.input.value,
        id: Date(),
      });

      this.handleClose();
    }
  }

  render() {
    return (
      <div>
        <div className="AddTodo-header">
          {!this.state.open
            ? <Button onClick={this.handleOpen} type="black">
                Add Todo
              </Button>
            : <Button onClick={this.handleClose} type="red">
                Close
              </Button>}
        </div>
        {this.state.open && <div className="AddTodo-content">
            <input className="AddTodo-input" ref={(c) => {this.input = c;}}/>
            <Button onClick={this.handleAddTodo}>Save</Button>
        </div>}
      </div>
    );
  }
}

export default AddTodo;
