import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobsByFactoryId } from "../../../../providers/jobs";
// import { setJobClicked, setJobsByFactoryId } from "../../../../actions/jobs";

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
import Candidaturas from "./Candidaturas";
import EditarVaga from "./EditarVaga";

export default function MinhasVagas(props) {
  const dispatch = useDispatch();
  const { factoryJobs } = useSelector((state) => state.jobsReducer);
  console.log("factoryJobs", factoryJobs)
  
  // const [candidaturas, setCandidaturas] = useState(
  //   factoryJobs?.map((item) => ({
  //     ...item,
  //     visualizar: false,
  //     editar: false,
  //   }))
  // );

  const factoryId = 1;

  useEffect(() => {
    dispatch(getJobsByFactoryId(factoryId));
  }, [dispatch]);

  const aparece = (position, field) => {
    // const updatedItems = factoryJobs?.map((item) => {
    //   if (item.id === position) {
    //     if (item.editar === false) {
    //       dispatch(setJobClicked(item));
    //     } else {
    //       dispatch(setJobClicked(undefined));
    //     }
    //     return {
    //       ...item,
    //       visualizar: false,
    //       editar: false,
    //       [field]: !item[field],
    //     };
    //   }
    //   return { ...item, visualizar: false, editar: false };
    // });
    // dispatch(setJobsByFactoryId(updatedItems))
  };

  return (
    <TabPanel value={props.value} index={props.index}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>

{/* factoryJobs */}
      {[].map((item, index) => (
        <div key={item.id}>
          <PaperStyled>
            <DivStyled>
              <div id="img-wrapper">
                <img src={image} alt="logo empresa" />
              </div>
              <div id="content-wrapper">
                <Typography variant="h3">{item.title}</Typography>

                <Typography>
                  zzzz <span id="date">yyyy</span>
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
            <Candidaturas />
          </HandleDiv>

          <HandleDiv display={item.editar} margin="5vh">
            <EditarVaga />
          </HandleDiv>

        </div>
      ))}
    </TabPanel>
  );
}
