import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../actions/loading";

import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.loadingReducer);
  console.log(open);

  const handleClose = () => {
    dispatch(setLoading(false));
  };

  return (
    <Backdrop open={open} onClick={handleClose} style={{ zIndex: 10 }}>
      <CircularProgress style={{ zIndex: 12 }} />
    </Backdrop>
  );
}
