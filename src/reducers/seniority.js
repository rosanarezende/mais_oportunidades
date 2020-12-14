const initialState = {
  // seniority: {},
  seniorities: [],
};

const seniorityReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_SENIORITY_BY_ID":
    //   return {
    //     ...state,
    //     seniority: action.payload.seniority,
    //   };

    case "SET_ALL_SENIORITIES":
      return {
        ...state,
        seniorities: action.payload.seniorities,
      };

    default:
      return state;
  }
};

export default seniorityReducer;
