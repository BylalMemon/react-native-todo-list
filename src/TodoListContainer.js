import { connect } from 'react-redux';
import TodoList from './TodoList';

// const mapStateToProps = (state, ownProps) => PropsToMergeWith_TodoListContainer_Props;
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

// const mapDispatchToProps = (dispatch, ownProps) => PropsToMergeWith_TodoListContainer_Props;
const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: () => dispatch({
    type: 'ADD_TODO',
    payload: {
      text: '',
    },
  }),
  editTodo: (id, values) => dispatch({
    type: 'EDIT_TODO',
    payload: { id, ...values },
  }),
  deleteTodo: id => dispatch({
    type: 'DELETE_TODO',
    payload: { id },
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
