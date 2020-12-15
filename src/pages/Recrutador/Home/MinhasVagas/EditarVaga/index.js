import { useDispatch, useSelector } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../../actions/alert";

import { textFieldsContent } from "../../CriarVaga/constants";

import { Button, MenuItem, Tooltip, TextField } from "@material-ui/core";
import { PaperStyled, Form, ChipInputStyled } from "../../CriarVaga/styles";

import EditorInput, {
  formatEditorOutput,
} from "../../../../../components/EditorInput";

export default function EditarVaga(props) {
  const dispatch = useDispatch();
  const {
    jobClicked,
    setJobClicked,
    chips,
    setChips,
    descricao,
    setDescricao,
    requisitos,
    setRequisitos,
  } = props;

  const descricaoFormatada = formatEditorOutput(descricao);
  const requisitosFormatado = formatEditorOutput(requisitos);

  const { workerCategories } = useSelector(
    (state) => state.workerCategoryReducer
  );
  const { areas } = useSelector((state) => state.areaReducer);
  const { seniorities } = useSelector((state) => state.seniorityReducer);
  const textFields = textFieldsContent(workerCategories, areas, seniorities);

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
    setJobClicked({
      ...jobClicked,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(jobClicked, chips, descricaoFormatada, requisitosFormatado);

    //limpar campos
    setJobClicked({});
    setChips([]);
    setDescricao(EditorState.createEmpty());
    setRequisitos(EditorState.createEmpty());

    // informar criação da vaga
    dispatch(setAlert(true, "Vaga cadastrada com sucesso."));
  };

  return (
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
              value={jobClicked[item.name] || ""}
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
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />
        </div>

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
          <Tooltip title="Salvar edições na vaga!">
            <span>
              <Button variant="contained" color="secondary" type="submit">
                SALVAR
              </Button>
            </span>
          </Tooltip>
        </div>
      </Form>
    </PaperStyled>
  );
}
