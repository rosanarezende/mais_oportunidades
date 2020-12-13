import styled from "styled-components";
import { Paper } from "@material-ui/core";
import degrade from "../../../../assets/degrade.svg";

export const Top = styled.div`
  margin: 10px 0 20px;
`;

export const PaperStyled = styled(Paper)`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0 15px 15px 0;
  margin-bottom: 2vh;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const DivStyled = styled.div`
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  padding: 2vh 2vw;
  width: 80%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1600px) {
    width: 75%;
  }
  @media screen and (max-width: 1300px) {
    width: 70%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 3vh 3vw;
    margin-right: 25vw;
  }

  #img-wrapper {
    width: 20%;
    @media screen and (max-width: 1200px) {
      width: 30%;
    }
    @media screen and (max-width: 800px) {
      width: 40%;
    }
    @media screen and (max-width: 500px) {
      width: 50%;
    }
    img {
      margin: auto;
      width: 150px;
      height: 150px;
      border-radius: 50%;

      @media screen and (max-width: 1400px) {
        width: 100px;
        height: 100px;
      }
    }
  }

  #content-wrapper {
    width: 80%;
    @media screen and (max-width: 1200px) {
      width: 70%;
    }
    @media screen and (max-width: 800px) {
      width: 60%;
    }
    @media screen and (max-width: 500px) {
      width: 50%;
    }

    #date {
      color: gray;
      margin-left: 1vw;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: 20%;
  padding: 2vh 0 0 2vw;
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1600px) {
    width: 25%;
  }
  @media screen and (max-width: 1300px) {
    width: 30%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    /* span {
      max-width: 120px;
    } */
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    @media screen and (max-width: 900px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const HandleDiv = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  margin-bottom: ${(props) => props.margin};
`;
