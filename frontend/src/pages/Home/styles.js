import styled from 'styled-components';

export const Container = styled.div`

  height: 100%;
  width:100%;

  display:flex;
  flex-direction:column;

`;

export const Header = styled.div`
  display:flex;
  align-items:center;
 
  width:100%;
  height:103px;

  background-color:var(--verde-primario);

  padding-left:70px;

`;


export const Greetings = styled.div`

  height: fit-content;

  > h1{
    font-size:40px;
    line-height:100%;
  }

  > p {
    color:var(--branco);
    font-size:20px;
  }

`;

export const UserName = styled.span`
   font-weight:bold;
`;

export const Content = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;

  height: 100%;
  width:100%;
`;

export const ConteudoBox = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;

   > h2{
     color:unset;
     font-weight:500;
   }
`;

export const CardsBox = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   height:90%;

   overflow-y:scroll;
   overflow-x:hidden;

   ::-webkit-scrollbar{
     display:none;
   }
`;
