import styled, { createGlobalStyle, css } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import './fonts.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${colors.primaryDark};
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primary};
    border: none;
    color: #fff;
    padding: 10px;
    width: 150px;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 200ms;

    :hover {
      filter: brightness(75%)
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  ul {
    list-style: none;
  }
`; // GlobalStyle

export const Container = styled.div`
  display: block;
  padding: 20px 50px;
  margin-top: 30px;
  margin-inline: auto;
  max-width: 500px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${(props) =>
    props.alignCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}
`; // Container

export const Title = styled.h1`
  font-size: 36px;
  color: ${colors.primaryDark};

  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}
`;

export const Description = styled.p`
  font-weight: 500;
  color: ${colors.secondary};
  opacity: 0.7;

  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}
`;
