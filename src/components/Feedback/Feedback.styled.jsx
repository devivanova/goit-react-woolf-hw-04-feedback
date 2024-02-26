import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 120px;
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #c4bbec;
    cursor: pointer;
  }
`;