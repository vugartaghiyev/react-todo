import {
  ADD_ITEM_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  COMPLETE_ITEM,
  SET_FILTER_TYPE,
  CLEAR_COMPLETED,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_LIST:
      return {
        ...state,
        list: [
          ...state.list,
          {
            text: action.payload,
            completed: false,
            id: state.list.length,
            selected: false,
          },
        ],
      };
    case REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case COMPLETE_ITEM:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case SET_FILTER_TYPE:
      return { ...state, filterType: action.payload };
    case CLEAR_COMPLETED:
      return { ...state, list: state.list.filter((item) => !item.completed) };
    default:
      return state;
  }
};
