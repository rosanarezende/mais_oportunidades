import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertFromHTML } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { getAllWorkerCategories } from "../../../../providers/workerCategory";
import { getAllAreas } from "../../../../providers/area";
import { getAllSeniorities } from "../../../../providers/seniority";
import { createJob, editJob } from "../../../../providers/jobs";

import { breadcrumbInfo, textFieldsContent } from "./constants";

import {
  Typography,
  Button,
  MenuItem,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { PaperStyled, Top, Form, ChipInputStyled } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

export default function CriarVaga(props) {
  const dispatch = useDispatch();
  const {
    value,
    index,
    changeTab,
    buttonActive,
    setButtonctive,
    descricao,
    setDescricao,
    requisitos,
    setRequisitos,
    input,
    setInput,
    chips,
    setChips,
  } = props;

  const { jobCreated } = useSelector((state) => state.jobsReducer);
  const { workerCategories } = useSelector(
    (state) => state.workerCategoryReducer
  );
  const { areas } = useSelector((state) => state.areaReducer);
  const { seniorities } = useSelector((state) => state.seniorityReducer);
  const textFields = textFieldsContent(workerCategories, areas, seniorities);

  const descricaoFormatada = formatEditorOutput(descricao);
  const requisitosFormatado = formatEditorOutput(requisitos);

  useEffect(() => {
    dispatch(getAllWorkerCategories());
    dispatch(getAllAreas());
    dispatch(getAllSeniorities());
    setInput({ cidade: "São Paulo" });
  }, [dispatch, setInput]);

  const handleAddChip = (chip) => {
    const newChips = [...chips, chip];
    setChips(newChips);
  };

  const handleDeleteChip = (chip, index) => {
    const newChips = chips.filter((thisChip) => thisChip !== chip);
    setChips(newChips);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPublish = false;
    const data = {
      factory_id: 1, //num - trocar pela API
      isPublish,
      title: input.titulo,
      address: input.cidade,
      role: 1, // input.cargo, //num - trocar pela API
      isForPCD: input.pcd === "SIM" ? true : false,
      categoryofworker_id: input.tipo,
      area_id: input.area,
      seniority_id: input.nivel,
      synonymsArray: input.chips,
      description: descricaoFormatada,
      requirements: requisitosFormatado,
    };

    // validar se descritivo da vaga e requisitos estão vazios?
    if (convertFromHTML(descricaoFormatada).contentBlocks.length === 0) {
      dispatch(setAlert(true, "Preencha a descrição da vaga para continuar."));
    } else {
      dispatch(createJob(data)).then(() => setButtonctive(true));
    }
  };

  const publicarVaga = () => {
    const data = {
      isPublish: true,
      title: input.titulo,
    };
    // tô colocando factory_id mocado ainda
    dispatch(editJob(jobCreated.id, 1, data)).then(() => {
      setInput({});
      setChips([]);
      setDescricao(EditorState.createEmpty());
      setRequisitos(EditorState.createEmpty());
      setButtonctive(false);
      dispatch(setAlert(true, "Vaga publicada com sucesso."));
      setTimeout(() => {
        changeTab(1);
      }, 1000);
    });
  };
  
  return (
    <TabPanel value={value} index={index}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>
      <PaperStyled>
        <Form onSubmit={handleSubmit}>
          <div id="inputs">
            {textFields.map((item, index) => (
              <TextField
                required
                key={index}
                className={item.className}
                select={item.select}
                type={item.tipo}
                name={item.name}
                value={input[item.name] || ""}
                onChange={changeInput}
                variant="outlined"
                size="small"
                label={item.label}
              >
                {item.select &&
                  item.data.map((option) => (
                    <MenuItem
                      style={{
                        justifyContent: "center",
                      }}
                      key={option.id}
                      value={option.id}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
              </TextField>
            ))}

            <ChipInputStyled
              className="sessenta"
              size="small"
              placeholder="SINÔNIMOS"
              variant="outlined"
              value={chips}
              helperText="Escreva o sinônimo e click enter para adicionar mais"
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
          </div>
          <br />

          <EditorInput
            editorState={descricao}
            setEditorState={setDescricao}
            text="DESCRITIVO DA VAGA"
          />

          <EditorInput
            editorState={requisitos}
            setEditorState={setRequisitos}
            text="REQUISITOS E DIFERENCIAIS LGBTQ+"
          />

          <div id="button-wrapper">
            <Button
              disabled={buttonActive}
              variant="contained"
              color="secondary"
              type="submit"
            >
              SALVAR
            </Button>

            <Tooltip title="Salve a vaga antes de publicar">
              <span>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={publicarVaga}
                  disabled={!buttonActive}
                >
                  PUBLICAR
                </Button>
              </span>
            </Tooltip>
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
