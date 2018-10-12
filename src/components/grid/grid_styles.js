import styled from 'styled-components';


export const Map = styled.main`
  display: grid;
  grid-template-columns: repeat(${props => props.width ? props.width : '100'}, 10px);
  grid-template-rows: repeat(${props => props.height ? props.height : '100'}, 10px);
  position: fixed;
    top: 50%;
    left: 50%;
  transform: translate(-50%, -50%);
`;
