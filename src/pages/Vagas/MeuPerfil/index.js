import TabPanel from "../../../components/TabPanel";

export default function MeuPerfil(props){
    return (
        <TabPanel value={props.value} index={1}>
        Meu perfil
      </TabPanel>
    )
}