import { connect } from 'react-redux';
import TodoList from './TodoList';

// const mapStateToProps = (state, ownProps) => PropsToMergeWith_TodoListContainer_Props;
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

// const mapDispatchToProps = (dispatch, ownProps) => PropsToMergeWith_TodoListContainer_Props;
// Dispatch isn't really needed, connect can automatically wrap the functions with dispatch
const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: () => ({
    type: 'ADD_TODO',
    payload: {
      text: '',
    },
  }),
  editTodo: (id, values) => ({
    type: 'EDIT_TODO',
    payload: { id, ...values },
  }),
  deleteTodo: id => ({
    type: 'DELETE_TODO',
    payload: { id },
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
