import { Typography, TextField } from "@material-ui/core";
import { PaperStyledmv, Topmv, Firstline, Secondline } from "./styles";

import TabPanel from "../../../../components/TabPanel";

export default function MinhasVagas(props) {
  return (
    <TabPanel value={props.value} index={1}>
      <Topmv>
        <Typography variant="body1">Home - Sou Recrutador - Vaga</Typography>
        <Typography variant="h5" gutterBottom>
          VAGAS
        </Typography>
      </Topmv>
      <PaperStyledmv>
        <Firstline>
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
        </Firstline>
        <Secondline>
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
        </Secondline>
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
      </PaperStyledmv>
    </TabPanel>
  );
}
