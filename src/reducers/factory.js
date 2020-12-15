const initialState = {
  factory: undefined,
  factories: [],
};

const factoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FACTORY_BY_ID":
      return {
        ...state,
        factory: action.payload.factory,
      };

    case "SET_ALL_FACTORIES":
      return {
        ...state,
        factories: action.payload.factories,
      };

    default:
      return state;
  }
};

export default factoryReducer;
