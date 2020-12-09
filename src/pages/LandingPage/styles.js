import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

export const PageWrapper = styled.div`
  min-height: 82vh;
  background-color: #fff;
`;

export const ImgContent = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 68vh;
  @media screen and (max-width: 1400px) {
    height: 60vh;
  }
  @media screen and (max-width: 1200px) {
    height: 55vh;
  }
  @media screen and (max-width: 1050px) {
    height: 45vh;
  }
  @media screen and (max-width: 900px) {
    height: 40vh;
  }
  @media screen and (max-width: 700px) {
    height: 30vh;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  margin: -130px 12vw 0;

  @media screen and (max-width: 1400px) {
    margin-top: -60px;
  }
  @media screen and (max-width: 1050px) {
    margin-top: -20px;
  }
  @media screen and (max-width: 900px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 700px) {
    margin: 30px 5vw 0;
  }
`;

export const Search = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;

  @media screen and (max-width: 1400px) {
    width: 55%;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1050px) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Text = styled(Button)`
  cursor: default;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
  :hover {
    background-color: transparent;
  }
  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const StyledInput = withStyles({
  root: {
    background: "rgba(0, 0, 0, .2)",
    borderRadius: 26,
    border: 0,
    color: "white",
    width: "45%",
    minWidth: "300px",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray",
      },
    },
  },
})(TextField);

export const WhoWrapper = styled.div`
  padding: 3vh 0;
  width: 60%;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

