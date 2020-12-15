const initialState = {
  // segment: {},
  segments: [],
  segmentCreated: undefined,
};

const segmentReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_SEGMENT_BY_ID":
    //   return {
    //     ...state,
    //     segment: action.payload.segment,
    //   };

    case "SET_ALL_SEGMENTS":
      return {
        ...state,
        segments: action.payload.segments,
      };

    case "SET_CREATED_SEGMENT":
      return {
        ...state,
        segmentCreated: action.payload.segment,
      };

    default:
      return state;
  }
};

export default segmentReducer;
