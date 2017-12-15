import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';

class Todo extends Component {

  constructor() {
    super();

    this.state = {
      clickCount: 0,
      todoItem: '',
      listItems: [],
      editing: 0,
    };
  }

  _onAddMessageBtnClicked = (event) => {
    let { listItems, todoItem } = this.state;
    listItems.push(todoItem);
    this.setState({
      listItems: listItems,
      todoItem: '',
     });
  }

  _onUserEnterText = (event) => {
    this.setState({ todoItem: event.target.value });
    console.log(this.state.todoItem);
  }

  completeListItem = (item, event) => {
    // make a shallow copy of listItems (in state)
    let listItems = this.state.listItems.slice()

    // splice -  removes the chosen item from listItems
    // indexOf - find the specific object in listItems
    // 1 - remove only 1 item
    listItems.splice(listItems.indexOf(item.props.todoItem), 1)

    // update state with the modified listItems array
    this.setState({ listItems })
  }

  render() {

    const style = {
      inputForm: {
        height: '50px',
        width: '100%',
        display: 'inline-block',
        float: 'center',
        margin: '10px 0',
      },
      inputField: {
        width: '60%',
      },
      list: {
        marginLeft: '-40px',
        padding: '0 auto',
      }
    }

    let listItems = this.state.listItems.map((todoItem, i) => {
                      return (
                          <TodoItem
                            uniqueId={i}
                            todoItem={todoItem}
                            completeItem={this.completeListItem}
                          />
                        );
                      });
    return (
      <div style={style.inputForm}>
        <input
          type="text"
          onChange={this._onUserEnterText}
          value={this.state.todoItem}
          style={style.inputField}
          >
        </input>
        <button onClick={this._onAddMessageBtnClicked}>
          Add Message
        </button>
        <ul style={style.list}>{ listItems }</ul>
      </div>
    );
  }
}

export default Todo;
