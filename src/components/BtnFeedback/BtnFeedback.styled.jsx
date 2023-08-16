import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 0px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
  transition: all 0.2s ease-in-out 0s;
  background-color:#bb9cae;
  color: rgb(255, 255, 255);
  cursor: pointer;
 :hover,
  :focus {
    background-color: #937dc3;
    color: black;
    
  }
`;