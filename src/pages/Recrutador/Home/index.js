import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState } from "draft-js";

import { setJobCreated } from "../../../actions/jobs";

import { getItem } from "../../../providers/storage";
import { getJobsByFactoryId } from "../../../providers/jobs";
import { getFactoryById } from "../../../providers/factory";

import { cnpjMask } from "./constants";

import { Paper } from "@material-ui/core";
import { TabStyled, TabsStyled } from "./styles";

import NavBar from "../../../components/NavBar";
import PageWrapper from "../../../components/PageWrapper";
import Footer from "../../../components/Footer";
import { formatEditorInput } from "../../../components/EditorInput";

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

  const [perfil, setPerfil] = useState({});  
  const [perfilDescricao, setPerfilDescricao] = useState(EditorState.createEmpty());
  const [segmentId, setSegmentId] = useState(undefined);

  const [chips, setChips] = useState([]);
  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const [requisitos, setRequisitos] = useState(EditorState.createEmpty());

  const { factoryJobs } = useSelector((state) => state.jobsReducer);
  const { factory } = useSelector((state) => state.factoryReducer);

  const factoryId = getItem("auth-user")?.id;
  const tabs = ["Criar Vaga", "Minhas Vagas", "Perfil"];

  useEffect(() => {
    dispatch(getJobsByFactoryId(factoryId));
    dispatch(getFactoryById(factoryId));
  }, [dispatch, factoryId]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if (newValue !== 0) {
      setInput({});
      setChips([]);
      setDescricao(EditorState.createEmpty());
      setRequisitos(EditorState.createEmpty());
      setButtonctive(false);
      dispatch(setJobCreated(undefined));
      if (newValue === 2) {
        const descriptionAtAPI = factory.description
          ? formatEditorInput(factory.description)
          : EditorState.createEmpty();
        setPerfil({
          cnpj: cnpjMask(factory.cnpj),
          empresa: factory.name,
          localizacao: factory.address,
          descricao: descriptionAtAPI,
          segmento: factory.segment,
          publicada: factory.isActive,
        });
        setPerfilDescricao(descriptionAtAPI);
        setSegmentId(factory.segment?.id);
      }
      if (newValue === 1) {
        dispatch(getJobsByFactoryId(factoryId));
      }
    } else {
      setInput({
        ...input,
        factory_id: factoryId,
        cidade: "São Paulo",
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
          factoryId={factoryId}
        />

        <MinhasVagas
          value={value}
          index={1}
          factoryJobs={factoryJobs}
          factoryId={factoryId}
        />

        <MeuPerfil
          value={value}
          index={2}
          factoryId={factoryId}
          perfil={perfil}
          setPerfil={setPerfil}
          perfilDescricao={perfilDescricao}
          setPerfilDescricao={setPerfilDescricao}
          segmentId={segmentId}
          setSegmentId={setSegmentId}
        />
      </PageWrapper>

      <Footer />
    </div>
  );
}
