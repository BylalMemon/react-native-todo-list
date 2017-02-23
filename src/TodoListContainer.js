import { connect } from 'react-redux';
import TodoList from './TodoList';

// const mapStateToProps = (state, ownProps) => PropsToMergeWith_TodoListContainer_Props;
const mapStateToProps = state => ({
  todos: state.todos,
});

// const mapDispatchToProps = (dispatch, ownProps) => PropsToMergeWith_TodoListContainer_Props;
// Dispatch isn't really needed, connect can automatically wrap the functions with dispatch
// This allows for actionCreators, functions that generate the action object

const addTodo = () => ({
  type: 'ADD_TODO',
  payload: {
    text: '',
  },
});

const editTodo = (id, values) => ({
  type: 'EDIT_TODO',
  payload: { id, ...values },
});

const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: { id },
});

const mapDispatchToProps = {
  addTodo,
  editTodo,
  deleteTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
