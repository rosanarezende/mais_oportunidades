const initialState = {
  job: {},
  factoryJobs: [],
  jobs: [],
  jobCreated: undefined,
  jobClicked: undefined,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB_BY_ID":
      return {
        ...state,
        job: action.payload.job,
      };

    case "SET_JOBS_BY_FACTORY_ID":
      // console.log("payload", action.payload.jobs);
      return {
        ...state,
        factoryJobs: action.payload.jobs,
      };

    case "SET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload.jobs,
      };

    case "SET_JOB_CREATED":
      return {
        ...state,
        jobCreated: action.payload.job,
      };

    case "SET_JOB_CLICKED":
      return {
        ...state,
        jobClicked: action.payload.job,
      };

    default:
      return state;
  }
};

export default jobsReducer;
