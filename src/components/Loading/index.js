import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/loading";

import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.loadingReducer);
  return (
    <Backdrop
      open={open}
      onClick={() => dispatch(setLoading(false))}
      style={{ zIndex: 10 }}
    >
      <CircularProgress style={{ zIndex: 12 }} />
    </Backdrop>
  );
}
