import styled, { createGlobalStyle, css } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  html {
    
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #01BF71, #010606);
    margin: 0;
    height: 100%;
    color: #010606;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    height: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export const StyledButton = styled.button`
  float: left;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')
    };
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 50px;
  width: 250px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')
    };
    }

    @media screen and (max-width: 400px) {
        width: 150px;
    }
`;

export const HomeButtonContainer = styled.div`
    display: inline;
    text-align: right;
`

export const LinkBtn = styled(Link)`
    float: right;
    color: #000;
`

export const Title = styled.h1`
    text-align: center;
    padding-bottom: 30px;
`


export const StyledError = styled.div`
  color: red;
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

export const StyledSuccess = styled.div`
  color: green;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

