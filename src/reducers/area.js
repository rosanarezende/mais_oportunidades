const initialState = {
  // area: {},
  areas: [],
};

const areaReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_AREA_BY_ID":
    //   return {
    //     ...state,
    //     area: action.payload.area,
    //   };

    case "SET_ALL_AREAS":
      return {
        ...state,
        areas: action.payload.areas,
      };

    default:
      return state;
  }
};

export default areaReducer;
