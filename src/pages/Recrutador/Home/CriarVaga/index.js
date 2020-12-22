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

export default function CriarVaga({
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
  factoryId,
}) {
  const dispatch = useDispatch();

  const { jobCreated } = useSelector((s) => s.jobsReducer);
  const { workerCategories } = useSelector((s) => s.workerCategoryReducer);
  const { areas } = useSelector((s) => s.areaReducer);
  const { seniorities } = useSelector((s) => s.seniorityReducer);
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
    const data = {
      title: input.titulo,
      address: input.cidade,
      description: descricaoFormatada,
      role: input.cargo,
      isPublish: false,
      isForPCD: input.pcd === "SIM" ? true : false,
      synonymsArray: chips,
      requirements: requisitosFormatado,
      categoryofworker_id: input.tipo,
      area_id: input.area,
      seniority_id: input.nivel,
      factory_id: factoryId,
    };

    // validar se descritivo da vaga e requisitos estão vazios?
    if (convertFromHTML(descricaoFormatada).contentBlocks.length === 0) {
      dispatch(setAlert(true, "Preencha a descrição da vaga para continuar."));
    } else {
      dispatch(createJob(data)).then(() => setButtonctive(true));
    }
  };

  const publicarVaga = () => {
    const data = { isPublish: true };
    dispatch(editJob(jobCreated.id, factoryId, data)).then(() => {
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
                disabled={buttonActive}
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
              disabled={buttonActive}
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
            readOnly={buttonActive}
          />

          <EditorInput
            editorState={requisitos}
            setEditorState={setRequisitos}
            text="REQUISITOS E DIFERENCIAIS LGBTQ+"
            readOnly={buttonActive}
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
