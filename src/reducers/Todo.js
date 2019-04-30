import { Z_DEFAULT_STRATEGY } from "zlib"; // eslint-disable-line

const initialState = {
    todoList: [],
  }
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        // 新しく追加するTODO
        const todo = action.payload.todo;
        // stateを複製して追加
        const newState = Object.assign({}, state);
        newState.todoList.push(todo);
        return newState;
      case 'DEL_TODO' :
        const deltodo = action.payload.deltodo;
        const delState = Object.assign({}, state);
        delState.todoList.pop(deltodo);
        return delState;
      case 'CHANGE_TODO' :
        const changetodo = action.payload.changetodo;
        const changeState = Object.assign({}, state);
        delState.todoList.pop(action.id, changetodo);
        return changeState;
      default:
        return state;
    }
  };

