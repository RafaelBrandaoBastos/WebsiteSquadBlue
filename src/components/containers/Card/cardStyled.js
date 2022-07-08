import styled from 'styled-components';

export const CardStyled = styled.div`
    width: 61.7rem;
    height: 73.9rem;
    background: #ffffff;
    border-radius: 2rem;
    padding: 5.6rem 5.7rem 3.6rem 4.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    @media (max-width: 600px) {
        max-width: 100vw;
        max-height: 100vh;
        border-radius: 0;
        padding: 1.5rem;
    }
`;

export const ContainerCard = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        background: #ffffff;
    }
`;
