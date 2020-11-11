import { Typography } from "@material-ui/core"
import { FooterWrapper } from './styles'

export default function Footer(){
    return (
        <FooterWrapper>
            <div>+oportunidades</div>
            <Typography variant="subtitle1">Termos e condições | Politica de privacidade</Typography>
            <div>redes sociais</div>
        </FooterWrapper>
    )
}