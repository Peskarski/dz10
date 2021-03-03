import React from 'react';
import { connect } from 'react-redux';
import { ACTION_DELETE_DATA } from '../../ducks/form.js';
import EditForm from '../EditForm/EditForm.js';

class List extends React.Component {
  state = {
    toEdit: false,
    editId: null
  }

  handleDeleteClick = (e) => {
    const { deleteTodo } = this.props;
    deleteTodo(e.target.parentElement.id);
  }

  handleEditClick = (e) => {
    this.setState({
      toEdit: true,
      editId: e.target.parentElement.id
    });
  }

  onEditClick = () => {
    this.setState({
      toEdit: false,
      editId: null
    })
  }

  render() {
    const { data } = this.props;
    const { toEdit, editId } = this.state;
    return (
      <div>
        <ul>
          {data.map((element) => {
            return (
              <li key={element.id} id={element.id}>
                <h3>{element.name}</h3>
                <h4>{element.todo}</h4>
                <button onClick={this.handleDeleteClick}>Delete</button>
                <button onClick={this.handleEditClick}>Edit</button>
              </li>
            )
          })}
        </ul>
        {toEdit && <EditForm id={editId} onEditClick={this.onEditClick}/>}
      </div>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  data: form.data,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (value) => dispatch(ACTION_DELETE_DATA(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
