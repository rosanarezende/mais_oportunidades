import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setJobCreated } from "../../../actions/jobs"

import { Paper } from "@material-ui/core";
import { TabStyled, TabsStyled } from "./styles";

import NavBar from "../../../components/NavBar";
import PageWrapper from "../../../components/PageWrapper";
import Footer from "../../../components/Footer";

import CriarVaga from "./CriarVaga";
import MeuPerfil from "./MeuPerfil";
import MinhasVagas from "./MinhasVagas";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomeRecrutador() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [input, setInput] = useState({});
  const [chips, setChips] = useState([]);
  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const [requisitos, setRequisitos] = useState(EditorState.createEmpty());
  const tabs = ["Criar Vaga", "Minhas Vagas", "Perfil"];

  const handleChange = (event, newValue) => {

    setValue(newValue);
    if (newValue !== 0) {
      setInput({});
      setChips([]);
      setDescricao(EditorState.createEmpty());
      setRequisitos(EditorState.createEmpty());
      setButtonctive(false);
      dispatch(setJobCreated(undefined));
    } else {
      setInput({
        ...input,
        cidade: "São Paulo"
      });
    }
  };
  return (
    <div>
      <NavBar />

      <PageWrapper>
        <Paper square>
          <TabsStyled
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <TabStyled label={tabs[0]} {...a11yProps(0)} />
            <TabStyled label={tabs[1]} {...a11yProps(1)} />
            <TabStyled label={tabs[2]} {...a11yProps(2)} />
          </TabsStyled>
        </Paper>

        <CriarVaga
          value={value}
          index={0}
          changeTab={setValue}
          buttonActive={buttonActive}
          setButtonctive={setButtonctive}
          descricao={descricao}
          setDescricao={setDescricao}
          requisitos={requisitos}
          setRequisitos={setRequisitos}
          input={input}
          setInput={setInput}
          chips={chips}
          setChips={setChips}
        />
        <MinhasVagas value={value} index={1}  />
        <MeuPerfil value={value} index={2}  />
      </PageWrapper>

      <Footer />
    </div>
  );
}
