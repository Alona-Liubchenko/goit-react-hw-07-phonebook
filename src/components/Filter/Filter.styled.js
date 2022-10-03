import styled from 'styled-components';
export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
`;

export const Input = styled.input`
  margin-left: 20px;
  border-radius: 10px;

  padding: 5px 15px;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
  }
`;
