import styled from 'styled-components';
import { Form, Field } from 'formik';
export const Forma = styled(Form)`
  display: block;
  justify-content: space-between;
`;
export const Label = styled.label`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
export const Input = styled(Field)`
  width: 500px;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  margin: 15px;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
  }
`;
export const Btn = styled.button`
  width: 150px;
  height: 30px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
    background-color: #6363e7d4;
  }
`;
