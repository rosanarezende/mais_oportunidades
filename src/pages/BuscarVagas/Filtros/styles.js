import styled from "styled-components";
import degrade from "../../../assets/degrade.svg";

export const FiltersWrapper = styled.div`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border-radius: 16px;
  margin-right: 2vw;
  padding: 10px;
  width: 22vw;
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
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 16px;
  border-bottom-right-radius: 11vw;
  padding: 4vh 15px 20vh;
  height: 100%;
  max-height: 60vh;

  @media screen and (max-width: 800px) {
    height: 42vh;
  }
  @media screen and (max-width: 500px) {
    height: 48vh;
  }
  @media screen and (max-width: 350px) {
    height: 55vh;
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
