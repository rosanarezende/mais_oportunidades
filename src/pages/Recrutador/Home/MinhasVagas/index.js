import { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { PaperStyled, Top, DivStyled, ButtonsWrapper, HandleDiv } from "./styles";

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
  const candidaturasNaApi = [{ id: 1}, { id: 2}, { id: 3}]
  const candidaturasFormatas = candidaturasNaApi.map(item => ({
    ...item,
    visualizar: false,
    editar: false
  }))

  const [candidaturas, setCandidaturas] = useState(candidaturasFormatas);

  const aparece = (position, field) => {
    const updatedItems = candidaturas.map((item, index) => {
      if (index === position) {
        return { 
          ...item,
          visualizar: false,
          editar: false, 
          [field]: !item[field] 
        };
      }
      return item;
    });
    setCandidaturas(updatedItems)
  };

  return (
    <TabPanel value={props.value} index={1}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>

      {candidaturas.map((item, index) => (
        <div key={index}>
          <PaperStyled>
            <DivStyled>
              <div id="img-wrapper">
                <img src={image} alt="logo empresa" />
              </div>
              <div id="content-wrapper">
                <Typography variant="h3">xxxxx</Typography>

                <Typography>
                  zzzz <span id="date">yyyy</span>
                </Typography>
              </div>
            </DivStyled>
            <ButtonsWrapper>
              <div>
                <Button
                  color="inherit"
                  onClick={() => aparece(index, 'editar')}
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
                  onClick={() => aparece(index, 'visualizar')}
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
