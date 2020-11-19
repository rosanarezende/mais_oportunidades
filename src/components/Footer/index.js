import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";

import { Typography } from "@material-ui/core";
import { FooterWrapper, Logo, SocialWrapper, SocialIcon } from "./styles";

import logo from "../../assets/Logo-01.png";
import linkedin from "../../assets/linedin.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/WhatsApp-icone 1.png";

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <FooterWrapper>
      <Logo
        src={logo}
        alt="Logo +oportunidades"
        onClick={() => dispatch(push(routes.home))}
      />

      <Typography variant="body2">
        Termos e condições | Politica de privacidade
      </Typography>

      <SocialWrapper>
        <SocialIcon
          src={linkedin}
          alt="linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/", "_blank")
          }
        />
        <SocialIcon
          src={instagram}
          alt="instagram"
          onClick={() =>
            window.open("https://www.instagram.com/", "_blank")
          }
        />
        <SocialIcon
          src={facebook}
          alt="facebook"
          onClick={() =>
            window.open("https://www.facebook.com/", "_blank")
          }
        />
        <SocialIcon
          src={whatsapp}
          alt="whatsapp"
          onClick={() => window.open('https://web.whatsapp.com/send?phone=+5527999672118', '_blank')}
        />
      </SocialWrapper>
    </FooterWrapper>
  );
}
