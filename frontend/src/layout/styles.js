import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    width:100vw;
    
    display:flex;
    align-items:center;
    justify-content:center;

    background-color:#000;
`;

export const Cell = styled.div`
    height:625px;
    width:375px;

    border-radius:5px;

    background-color:var(--branco);
`;