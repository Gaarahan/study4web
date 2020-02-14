import {ACTION} from "../action";

export default function todos(state = [], action) {
  switch(action.type) {
    case ACTION.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case ACTION.TOGGLE_TODO:
      return state.map((val, i) => {
        if (i === action.index) {
          return Object.assign({}, val, {
            completed: !val.completed,
          })
        }
        return val;
      });
    default:
      return state
  }
}

