// import { useState } from "react";
// import { Typography, TextField, Button } from "@material-ui/core";
// import { Top, Line01, Line02, Line03, ButtonsWraper, Form } from "./styles";

// import TabPanel from "../../../../components/TabPanel";
// import Breadcrumb from "../../../../components/Breadcrumb";

// import { routes } from "../../../../routes";

// export default function MeuPerfil(props) {
//   const breadcrumbInfo = [
//     {
//       nome: "Home",
//       rota: routes.landingPage,
//     },
//     {
//       nome: "Sou Recrutador",
//       rota: routes.homeRecrutador,
//       // TODO: Mudar essa rota quando tiver sou recrutador
//     },
//     {
//       nome: "Meu Perfil",
//     },
//   ];

//   const [input, setInput] = useState({
//     cnpj: "",
//     empresa: "",
//     segmento: "",
//     local: "",
//   });

//   const changeInput = (e) => {
//     const { name, value } = e.target;
//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };

//   return (
//     <TabPanel value={props.value} index={2}>
//       <Top>
//         <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
//         <Typography variant="h5" gutterBottom>
//           MEU PERFIL
//         </Typography>
//       </Top>

//       <Form>
//         <Line01>
//           <TextField
//             required
//             name="cnpj"
//             value={input.cnpj || ""}
//             onChange={changeInput}
//             fullWidth
//             variant="outlined"
//             size="small"
//             placeholder="CNPJ"
//             inputProps={{
//               style: {
//                 textAlign: "center",
//               },
//             }}
//           />
//         </Line01>
//         <Line02>
//           <TextField
//             required
//             name="empresa"
//             value={input.empresa || ""}
//             onChange={changeInput}
//             fullWidth
//             variant="outlined"
//             size="small"
//             placeholder="NOME DA EMPRESA AQUI"
//             inputProps={{
//               style: {
//                 textAlign: "center",
//               },
//             }}
//           />
//           <TextField
//             required
//             name="segmento"
//             value={input.segmento || ""}
//             onChange={changeInput}
//             fullWidth
//             variant="outlined"
//             size="small"
//             placeholder="SEGMENTO"
//             inputProps={{
//               style: {
//                 textAlign: "center",
//               },
//             }}
//           />
//         </Line02>
//         <Line03>
//           <TextField
//             required
//             name="local"
//             value={input.local || ""}
//             onChange={changeInput}
//             fullWidth
//             variant="outlined"
//             size="small"
//             placeholder="LOCALIZAÇÃO"
//             inputProps={{
//               style: {
//                 textAlign: "center",
//               },
//             }}
//           />
//         </Line03>
//         <TextField
//           fullWidth
//           variant="outlined"
//           multiline
//           rows={15}
//           margin="normal"
//         />
//         <ButtonsWraper>
//           <Button variant="contained" color="secondary" type="submit">
//             SALVAR
//           </Button>
//           <Button variant="contained" color="primary">
//             PUBLICAR
//           </Button>
//         </ButtonsWraper>
//       </Form>
//     </TabPanel>
//   );
// }

import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { breadcrumbInfo } from "./constants";

import { Typography, Button, Tooltip } from "@material-ui/core";
import {
  Top,
  Line1,
  Line2,
  TextFieldStyled,
  Form,
  ButtonsWraper,
} from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

export default function MeuPerfil(props) {
  const dispatch = useDispatch();
  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);

  const [input, setInput] = useState({
    cnpj: "",
    empresa: "",
    segmento: "",
    local: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(descricaoFormatada);

    setDescricao(EditorState.createEmpty());

    dispatch(setAlert(true, "Perfil cadastrado com sucesso."));

    setButtonctive(true);
  };

  const publicarVaga = () => {
    // alert("vaga publicada com sucesso");
    dispatch(setAlert(true, "Perfil publicado com sucesso."));
  };

  return (
    <TabPanel value={props.value} index={2}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          MEU PERFIL
        </Typography>
      </Top>

      <Form onSubmit={handleSubmit}>
        <Line1>
          <TextFieldStyled
            // required
            name="cnpj"
            value={input.cnpj || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="CNPJ"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />

          <TextFieldStyled
            // required
            name="empresa"
            value={input.empresa || ""}
            onChange={changeInput}
            variant="outlined"
            size="small"
            placeholder="NOME DA EMPRESA"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line1>
        <Line2>
          <TextFieldStyled
            // required
            name="segmento"
            value={input.segmento || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="SEGMENTO"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />

          <TextFieldStyled
            // required
            name="local"
            value={input.local || ""}
            onChange={changeInput}
            variant="outlined"
            size="small"
            placeholder="LOCALIZAÇÃO"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line2>
        <EditorInput
          editorState={descricao}
          setEditorState={setDescricao}
          text="DESCRITIVO"
        />
        <ButtonsWraper>
          <Button variant="contained" color="secondary" type="submit">
            SALVAR
          </Button>

          <Tooltip title="Salve o perfil antes de publicar">
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
        </ButtonsWraper>
      </Form>
    </TabPanel>
  );
}
