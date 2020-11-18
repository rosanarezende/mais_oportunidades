const initialState = {
  open: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        open: action.payload.open,
      };

    default:
      return state;
  }
};

export default loadingReducer;
