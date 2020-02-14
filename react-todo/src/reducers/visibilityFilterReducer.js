import {ACTION, VisibilityFilters} from "../action";

export default function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case ACTION.SET_VISIBILITY_FILTER:
        return action.filter;
    default:
      return state
  }
}

