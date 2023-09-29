import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({isHide}) => (isHide ? 'blue' : 'greenyellow')};

  width: 300px;
  height: 300px;
  &:hover{
    background: red;
    color: yellow;
  }
  h2{
    color: white;
    &:hover{
color: blue;
    }
  }
`;
