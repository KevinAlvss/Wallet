import styled from 'styled-components';

export const Container = styled.div`
  height: 60px ;
  width: 100%;

  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius:5px;

  padding:0 15px;
  margin:5px 0;

  flex-shrink:0;

  background-color: ${props => props.cor || props.gasto === true ? props.cor : "#f00"} ; 

   > * {
      color:var(--branco);
  }

  > h4{
      font-size:18px;
      font-weight:400;
  }
`;
