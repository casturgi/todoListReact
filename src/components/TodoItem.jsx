import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    const style = {
      listItem: {
        width: '80%',
        color: 'white',
        backgroundColor: '#518e08',
        display: 'inline-block',
        float: 'center',
        padding: '5px 60px',
        borderRadius: '5px',
      },
      completeButton: {
        display: 'inline-block',
        float: 'center',
      }
    }
    return(
      <li key={this.props.uniqueId} style={ style.listItem }>
        {this.props.todoItem}<br />
        <button
        onClick={(e) => (this.props.completeItem(this, e))}>
          Complete
        </button>
      </li>
    )
  }
}

export default TodoItem;
