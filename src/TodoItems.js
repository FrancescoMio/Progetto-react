import React, { Component } from 'react'

/**
 * stampa a video la todo list e richiama il metodo deleteItem per eliminare un compito
 */
class TodoItems extends Component {  
  creaCompito = item => {
    return (
      <li key={item.key}>
        {item.text}
        <button onClick={() => this.props.deleteItem(item.key)}> X </button>
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.creaCompito)
    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems