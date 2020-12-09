import styled from 'styled-components'
import { Typography } from "@material-ui/core";

export const FooterWrapper = styled.footer`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  background-color: #c4c4c4;
`;

export const Logo = styled.img`
  height: 4vh;
  width: auto;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    height: 3vh;
  }
`;

export const TypographyStyled = styled(Typography)`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialIcon = styled.img`
  height: 2.5vh;
  width: auto;
  margin-right: 10px;
  cursor: pointer;
`;
