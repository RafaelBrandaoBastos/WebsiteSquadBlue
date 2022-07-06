import styled from 'styled-components';

export const CardStyled = styled.div`
width: 50.7rem;
height: 55.9rem;
background: #FFFFFF;
border-radius: 2rem;
padding: 5.6rem 5.7rem 3.6rem 4.5rem;

@media (max-width: 600px){
width:100vw;
height:100vh;
border-radius: 0;
}
`;

export const ContainerCard = styled.div`
min-height: 100vh;
width:100vw;
background: #E5E5E5;
display: flex;
align-items: center;
justify-content: center;
`;