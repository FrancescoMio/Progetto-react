import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <h1 id="titolo"><strong>TodoList <small>By Francesco Mio</small></strong></h1>
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Aggiungi compito..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList