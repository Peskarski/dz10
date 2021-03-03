import React from 'react';
import { connect } from 'react-redux';
import {
  ACTION_ADD_DATA,
} from '../../ducks/form.js';

class Form extends React.Component {
  state = {
    name: '',
    todo: '',
    id: Math.random()
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleTodoChange = e => {
    this.setState({
      todo: e.target.value
    });
  }

  handleClick = () => {
    const { onAddClick } = this.props;
    onAddClick(this.state);
    this.setState({
      name: '',
      todo: '',
      id: Math.random()
    });
  }

  render() {
    const { name, todo } = this.state;

    return (
      <div>
        <form>
          <input name="name" placeholder="name" onChange={this.handleNameChange} value={name}></input>
          <input name="todo" placeholder="TODO" onChange={this.handleTodoChange} value={todo}></input>
        </form>
        <button onClick={this.handleClick} >Add TODO</button>
      </div>
    )
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (value) => dispatch(ACTION_ADD_DATA(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
