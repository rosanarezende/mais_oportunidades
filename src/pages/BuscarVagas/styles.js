import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";

export const PageContent = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Top = styled.div`
  padding: 30px 0 20px;
`;

export const FiltersWrapper = styled.div`
  background: #949191;
  border-radius: 16px;
  width: 22vw;
  margin-right: 2vw;
  padding: 10px;
  max-height: 60vh;

  @media screen and (max-width: 1600px) {
    width: 30vw;
  }
  @media screen and (max-width: 1400px) {
    width: 40vw;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const FiltersContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border-bottom-right-radius: 11vw;
  padding: 4vh 15px 20vh;
  height: 100%;
  min-height: 46vh;
  max-height: 60vh;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    min-height: 30vh;
    height: 32vh;
    padding: 4vh 30px 20vh;
  }
  @media screen and (max-width: 600px) {
    height: 38vh;
    padding: 4vh 20px 20vh;
  }
`;

export const FilterBox = styled.div`
  margin-bottom: 2.5vh;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
`;

export const ResultWrapper = styled.div`
  width: 72vw;
  height: ${(props) => props.display && "25vh"};
  display: ${(props) => props.display && "flex"};
  align-items: ${(props) => props.display && "center"};
  justify-content: ${(props) => props.display && "center"};
  margin-bottom: 2vh;
  
  @media screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 2vh 0;
    height: ${(props) => props.display && "10vh"};
  }
`;

export const VacancyWrapper = styled.div`
  width: 100%;
  background: #c4c4c4;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 1vh;

  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin-bottom: 2vh;
  }
`;

export const Image = styled.img`
  width: 116px;
  height: 90px;
  object-fit: cover;
  margin-right: 1vw;
`;

export const VacancyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DetailButton = styled(Button)`
  width: 150px;
  height: 36px;
  @media screen and (max-width: 1200px) {
   margin-top: 10px;
   align-self: center;
  }
`;

export const FactoryName = styled(Typography)`
  padding-bottom: 10px;
`;

export const EmailWrapper = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;
