import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  /* Position Properties */
  top: -14px;
  /* Font Properties */
  font-size: 12px;
  /* Color Properties */
  color: ${mainColor};
`;

export const FormGroup = styled.div`
  /* Position Properties */
  position: relative;
  /* Dimension Properties */
  margin: 45px 0;

  input[type='password'] {
    /* Font Properties */
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  /* Display Properties */
  display: block;
  /* Dimension Properties */
  width: 100%;
  margin: 25px 0;
  border: none;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  padding: 10px 10px 10px 5px;
  /* Font Properties */
  font-size: 18px;
  /* Color Properties */
  color: ${subColor};
  /* Background Properties */
  background-color: white;

  &:focus {
    /* Dimension Properties */
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  pointer-events: none;
  /* Position Properties */
  position: absolute;
  top: 10px;
  left: 5px;
  /* Font Properties */
  font-size: 16px;
  font-weight: normal;
  /* Color Properties */
  color: ${subColor};
  /* Animation Properties */
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles};
  }
`;
