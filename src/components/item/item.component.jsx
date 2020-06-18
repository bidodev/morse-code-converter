import React, { Component } from 'react';

class TodoItem extends Component {


  render() {
    const { id, desc, status } = this.props.todo;
    return (
      <li className={status ? 'checked' : ''}>
        {`${id} - ${desc}`}
        <div>
          <input type="checkbox" onChange={() => this.props.handleComplete(id)} />
          <button className="btn" onClick={() => this.props.handleDelete(id)}>✗</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
