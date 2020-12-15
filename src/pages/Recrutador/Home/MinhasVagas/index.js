import { useState } from "react";
import { useDispatch } from "react-redux";

import { setJobsByFactoryId } from "../../../../actions/jobs";

import { Typography, Button } from "@material-ui/core";
import {
  PaperStyled,
  Top,
  DivStyled,
  ButtonsWrapper,
  HandleDiv,
} from "./styles";

import { breadcrumbInfo } from "./constants";
import image from "../../../../assets/degrade.png";
import editar from "../../../../assets/editar.svg";
import despublicar from "../../../../assets/despublicar.svg";
import visualizar from "../../../../assets/visualizar.svg";
// import download from "../../../../assets/download.svg";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import { formatEditorInput } from "../../../../components/EditorInput";

import Candidaturas from "./Candidaturas";
import EditarVaga from "./EditarVaga";

export default function MinhasVagas(props) {
  const dispatch = useDispatch();
  const { factoryJobs } = props;

  const [jobClicked, setJobClicked] = useState({});
  const [chips, setChips] = useState([]);
  const [descricao, setDescricao] = useState(formatEditorInput(""));
  const [requisitos, setRequisitos] = useState(formatEditorInput(""));

  const aparece = (position, field) => {
    const updatedItems = factoryJobs?.map((item) => {
      if (item.id === position) {
        setJobClicked({
          // ...item,
          titulo: item?.title,
          tipo: item?.category?.id,
          area: item?.area?.id,
          nivel: item?.seniority?.id,
          cidade: item?.address,
          pcd: item?.isForPCD ? "SIM" : "NÃO",
          // ====================================
          cargo: "", // jobClicked.role, // "ALTERAR DEPOIS", // precisa vir da API
        });
        setChips(item?.synonymsArray);
        const descricaoDaAPI = item?.description;
        setDescricao(formatEditorInput(descricaoDaAPI));
        const reqDaAPI = item?.requirements;
        setRequisitos(formatEditorInput(reqDaAPI));

        return {
          ...item,
          visualizar: false,
          editar: false,
          [field]: !item[field],
        };
      }
      return { ...item, visualizar: false, editar: false };
    });
    dispatch(setJobsByFactoryId(updatedItems));
  };

  return (
    <TabPanel value={props.value} index={props.index}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>

      {factoryJobs?.map((item) => (
        <div key={item?.id}>
          <PaperStyled>
            <DivStyled>
              <div id="img-wrapper">
                <img src={image} alt="logo empresa" />
              </div>
              <div id="content-wrapper">
                <Typography variant="h3">{item?.title}</Typography>

                <Typography>
                  {item?.area?.name} <span id="date">yyyy</span>
                </Typography>
              </div>
            </DivStyled>
            <ButtonsWrapper>
              <div>
                <Button
                  color="inherit"
                  onClick={() => aparece(item.id, "editar")}
                  startIcon={<img src={editar} alt="ícone" />}
                >
                  Editar
                </Button>
              </div>
              <div>
                <Button
                  color="inherit"
                  // onClick={() => dispatch(push(routes.login))}
                  startIcon={<img src={despublicar} alt="ícone" />}
                >
                  Despublicar
                </Button>
              </div>
              <div>
                <Button
                  color="inherit"
                  onClick={() => aparece(item.id, "visualizar")}
                  startIcon={<img src={visualizar} alt="ícone" />}
                >
                  Visualizar candidaturas
                </Button>
              </div>
              {/* <div>
                <Button
                  color="inherit"
                  // onClick={() => dispatch(push(routes.login))}
                  startIcon={<img src={download} alt="ícone" />}
                >
                  Download
                </Button>
              </div> */}
            </ButtonsWrapper>
          </PaperStyled>

          <HandleDiv display={item.visualizar}>
            <Candidaturas
              jobClicked={jobClicked}
              setJobClicked={setJobClicked}
            />
          </HandleDiv>

          <HandleDiv display={item.editar} margin="5vh">
            <EditarVaga
              jobClicked={jobClicked}
              setJobClicked={setJobClicked}
              chips={chips}
              setChips={setChips}
              descricao={descricao}
              setDescricao={setDescricao}
              requisitos={requisitos}
              setRequisitos={setRequisitos}
            />
          </HandleDiv>
        </div>
      ))}
    </TabPanel>
  );
}
