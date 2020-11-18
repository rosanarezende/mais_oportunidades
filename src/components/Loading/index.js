import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/loading";

import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loadingReducer);

  const handleClose = () => {
    dispatch(setLoading(false));
  };

  return (
    <Backdrop open={loading} onClick={handleClose}>
      <CircularProgress />
    </Backdrop>
  );
}
