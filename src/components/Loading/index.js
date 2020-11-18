import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/loading";

import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.loadingReducer);

  const handleClose = () => {
    dispatch(setLoading(false));
  };

  return (
    <Backdrop open={open ?? false} onClick={handleClose}>
      <CircularProgress />
    </Backdrop>
  );
}
