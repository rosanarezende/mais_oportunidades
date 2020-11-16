export const setAlert = (
  open,
  text = undefined,
  title = undefined,
  confirm = undefined
) => ({
  type: "SET_ALERT",
  payload: {
    open,
    text,
    title,
    confirm,
  },
});
