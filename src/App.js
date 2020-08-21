import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/AddItem/AddItem'
//import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Amr', age: 22 },
      { id: 2, name: 'Ahmed', age: 26 },
      { id: 3, name: 'Mohammed', age: 25 }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({ items })
    /* Or you can use this way
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})
    */
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">To Do List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;