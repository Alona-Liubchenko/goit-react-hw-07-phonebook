import styled from 'styled-components';
export const Item = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
  background: #afb4eb;
`;
export const Btn = styled.button`
  width: 80px;
  height: auto;
  padding: 3px;
  border-radius: 15px;
  border: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #6363e7d4;
  }
`;
export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.16;
`;
