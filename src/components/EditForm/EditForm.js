import React from 'react';
import { connect } from 'react-redux';
import { ACTION_EDIT_DATA } from '../../ducks/form.js'

class EditForm extends React.Component {
  state = {
    name: this.props.data.find(element => element.id === Number(this.props.id)).name,
    todo: this.props.data.find(element => element.id === Number(this.props.id)).todo,
    id: this.props.id
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleTodoChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleClick = () => {
    const { onEditTodo, onEditClick } = this.props;
    onEditTodo(this.state);
    onEditClick();
  }

  render() {
    const { name, todo } = this.state;
    return (
      <div>
        <form>
          <input name="name" onChange={this.handleNameChange} value={name}></input>
          <input name="todo" onChange={this.handleTodoChange} value={todo}></input>
        </form>
        <button onClick={this.handleClick}>Approve</button>
      </div>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  data: form.data
});

const mapDispatchToProps = (dispatch) => ({
  onEditTodo: (value) => dispatch(ACTION_EDIT_DATA(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
