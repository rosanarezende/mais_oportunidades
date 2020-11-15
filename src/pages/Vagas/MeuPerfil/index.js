import { Typography, TextField } from "@material-ui/core";
import { PaperStyled, Top, Line01, Line02, Line03 } from "./styles";

import TabPanel from "../../../components/TabPanel";

export default function MeuPerfil(props) {
  return (
    <TabPanel value={props.value} index={2}>
      <Top>
        <Typography variant="body1">Home - Sou Recrutador - Vaga</Typography>
        <Typography variant="h5" gutterBottom>
          MEU PERFIL
        </Typography>
      </Top>

      <PaperStyled>
        <Line01>
          <TextField fullWidth variant="outlined" size="small" />
        </Line01>
        <Line02>
          <TextField fullWidth variant="outlined" size="small" />
          <TextField fullWidth variant="outlined" size="small" />
        </Line02>
        <Line03>
          <TextField fullWidth variant="outlined" size="small" />
        </Line03>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={15}
          margin="normal"
        />
      </PaperStyled>
    </TabPanel>
  );
}
