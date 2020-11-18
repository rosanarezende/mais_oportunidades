const initialState = {
  job: {},
  factoryJobs: [],
  jobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB_BY_ID":
      return {
        ...state,
        job: action.payload.job,
      };

    case "SET_JOBS_BY_FACTORY_ID":
      return {
        ...state,
        factoryJobs: action.payload.jobs,
      };

    case "SET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload.jobs,
      };

    default:
      return state;
  }
};

export default jobsReducer;
