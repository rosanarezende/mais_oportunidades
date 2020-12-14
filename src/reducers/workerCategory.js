const initialState = {
  // workerCategory: {},
  workerCategories: [],
};

const workerCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_WORKER_CATEGORY_BY_ID":
    //   return {
    //     ...state,
    //     workerCategory: action.payload.workerCategory,
    //   };

    case "SET_ALL_WORKER_CATEGORIES":
      return {
        ...state,
        workerCategories: action.payload.workerCategories,
      };

    default:
      return state;
  }
};

export default workerCategoryReducer;
