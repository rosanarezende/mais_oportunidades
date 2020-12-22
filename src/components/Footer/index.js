import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes";

// import { Typography } from "@material-ui/core";
import {
  FooterWrapper,
  Logo,
  SocialWrapper,
  SocialIcon,
  TypographyStyled,
} from "./styles";

import logo from "../../assets/Logo-01.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <FooterWrapper>
      <Logo
        src={logo}
        alt="Logo +oportunidades"
        onClick={() => dispatch(push(routes.landingPage))}
      />

      <TypographyStyled variant="body2" component="p">
        Termos e condições | Politica de privacidade
      </TypographyStyled>

      <SocialWrapper>
        <SocialIcon
          src={linkedin}
          alt="linkedin"
          onClick={() => window.open("https://www.linkedin.com/", "_blank")}
        />
        <SocialIcon
          src={whatsapp}
          alt="whatsapp"
          onClick={() =>
            window.open(
              "https://web.whatsapp.com/send?phone=+5527999672118",
              "_blank"
            )
          }
        />
        <SocialIcon
          src={instagram}
          alt="instagram"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        />
        <SocialIcon
          src={facebook}
          alt="facebook"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
        />
        <SocialIcon
          src={twitter}
          alt="twitter"
          onClick={() => window.open("https://www.twitter.com/", "_blank")}
        />
      </SocialWrapper>
    </FooterWrapper>
  );
}
