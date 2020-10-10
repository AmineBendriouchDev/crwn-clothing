import styled, { css } from 'styled-components';

const customBtnStyles = css`
  /* Dimensions Properties */
  border: none;
  /* Color Properties */
  color: white;
  /* Background Properties */
  background-color: black;

  &:hover {
    /* Dimensions Properties */
    border: 1px solid black;
    /* Color Properties */
    color: black;
    /* Background Properties */
    background-color: white;
  }
`;

const invertedBtnStyles = css`
  /* Dimensions Properties */
  border: 1px solid black;
  /* Color Properties */
  color: black;
  /* Background Properties */
  background-color: white;

  &:hover {
    /* Dimensions Properties */
    border: none;
    /* Color Properties */
    color: white;
    /* Background Properties */
    background-color: black;
  }
`;

const googleBtnStyles = css`
  /* Dimensions Properties */
  border: none;
  /* Background Properties */
  background-color: #4285f4;

  &:hover {
    /* Color Properties */
    color: white;
    /* Background Properties */
    background-color: #357ae8;
  }
`;

const getBtnStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleBtnStyles;
  }

  return props.inverted ? invertedBtnStyles : customBtnStyles;
};

export const BtnContainer = styled.button`
  cursor: pointer;
  /* Display Properties */
  display: flex;
  justify-content: center;
  /* Dimensions Properties */
  height: 50px;
  width: auto;
  min-width: 165px;
  padding: 0 35px 0 35px;
  /* Fonts Properties */
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 50px;

  ${getBtnStyles}
`;
