import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../actions/alert";

import {
  Typography,
  // TextField
} from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";

import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import EditorInput, {
  formatEditorOutput,
} from "../../../components/EditorInput";


function Curriculo() {
  const dispatch = useDispatch();
  // const [experiencias, setExperiencias] = useState([]);
  // const [formacoes, setFormacoes] = useState([]);

  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(descricaoFormatada);

    //limpar campos
    // setInput({});
    setDescricao(EditorState.createEmpty());

    // informar criação da vaga
    dispatch(setAlert(true, "xxxx."));
  };

  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form onSubmit={handleSubmit}>
            <Typography variant="h1" align="center" gutterBottom>
              CURRÍCULO
            </Typography>

            {/* <TextField
              multiline
              margin="dense"
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="xxx"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            /> */}
            <EditorInput
              editorState={descricao}
              setEditorState={setDescricao}
              text="DESCRITIVO DA VAGA"
            />

            <br />
            <br />
            <Typography variant="h2" align="center" gutterBottom>
              EXPERIÊNCIA PROFISSIONAL
            </Typography>

            <br />
            <br />
            <Typography variant="h2" align="center" gutterBottom>
              FORMAÇÃO ACADÊMICA
            </Typography>
          </form>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default Curriculo;
