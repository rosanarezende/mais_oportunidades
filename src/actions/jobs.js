export const setJobById = (job) => ({
  type: "SET_JOB_BY_ID",
  payload: {
    job,
  },
});

export const setJobsByFactoryId = (jobs) => ({
  type: "SET_JOBS_BY_FACTORY_ID",
  payload: {
    jobs,
  },
});

export const setAllJobs = (jobs) => ({
  type: "SET_ALL_JOBS",
  payload: {
    jobs,
  },
});
