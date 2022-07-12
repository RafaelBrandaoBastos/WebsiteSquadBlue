import styled from 'styled-components';

export const ContainerHeader = styled.header`
    height: 18rem;
    width: 100%;
    background: #e5e5e5;
    padding: 5.15rem 7.11rem 5.25rem 11.8rem;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 1.5rem;
        height: 3.5rem;
    }
`;

export const SmallTitleHeader = styled.h3`
    font-family: 'Inter';
    font-size: 1.8rem;
    color: #111111;
    margin: 0;
    margin-right: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const BigestTitleHeader = styled.h1`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 4rem;
    color: #074ee8;
    margin: 0;

    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`;
