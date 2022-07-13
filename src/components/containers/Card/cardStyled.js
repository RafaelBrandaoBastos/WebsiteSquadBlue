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
    margin-top: 9.5rem;

    @media (max-width: 640px) {
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        padding: 1.5rem;
        margin-top: 0;
    }
`;

export const Container = styled.div`
    min-height: 100%;
    width: 100%;
    background: #e5e5e5;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 9.5rem;

    @media (max-width: 600px) {
        background: #ffffff;
        padding-bottom: 0;
    }
`;
