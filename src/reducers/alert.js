const initialState = {
  open: false,
  text: undefined,
  title: undefined,
  confirm: undefined,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        open: action.payload.open,
        text: action.payload.text,
        title: action.payload.title,
        confirm: action.payload.confirm,
      };

    default:
      return state;
  }
};

export default alertReducer;
