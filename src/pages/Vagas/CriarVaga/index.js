import { Typography, TextField } from "@material-ui/core";
import { PaperStyled, Top, Line1, Line2, Line3 } from "./styles";

import TabPanel from "../../../components/TabPanel";

export default function CriarVaga(props) {
  return (
    <TabPanel value={props.value} index={0}>
      <Top>
        <Typography variant="body1">LALALALLALALALALALALALAAL</Typography>
        <Typography variant="h5" gutterBottom>
          LALALALLALALALALALALALAAL
        </Typography>
      </Top>
      <PaperStyled>
        <Line1>
          <TextField fullWidth variant="outlined" size="small" />
        </Line1>
        <Line2>
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
        </Line2>
        <Line3>
          <TextField fullWidth variant="outlined" size="small" />
        </Line3>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={15}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          margin="normal"
        />
      </PaperStyled>
    </TabPanel>
  );
}
