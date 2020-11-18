export const setFactoryById = (factory) => ({
  type: "SET_FACTORY_BY_ID",
  payload: {
    factory,
  },
});

export const setAllFactories = (factories) => ({
  type: "SET_ALL_FACTORIES",
  payload: {
    factories,
  },
});
