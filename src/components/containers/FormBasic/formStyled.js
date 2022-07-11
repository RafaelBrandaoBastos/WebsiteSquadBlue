import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2.5rem;
    @media (max-width: 600px) {
        gap: 1rem;
    }
`;

export const ContainerName = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: 600px) {
    }
`;

export const ContainerNickname = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: 600px) {
    }
`;

export const ContainerEmailPhone = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 600px) {
        gap: 1rem;
    }
`;

export const ContainerPhone = styled.div`
    position: relative;
    width: 35%;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
export const ContainerEmail = styled.div`
    width: 60%;
    position: relative;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
export const DayMonth = styled.div`
    display: flex;
    width: 47.5%;
    justify-content: space-between;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
export const YearAge = styled.div`
    display: flex;
    width: 47.5%;
    justify-content: space-between;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ContainerDay = styled.div`
    width: 45%;
`;
export const ContainerMonth = styled.div`
    width: 45%;
`;
export const ContainerYear = styled.div`
    width: 45%;
`;
export const ContainerAge = styled.div`
    width: 45%;
`;
export const ErrorMessage = styled.span`
    position: absolute;
    font-size: 1.4rem;
    color: red;
    top: 1px;
`;
export const Label = styled.p`
    width: 100%;
    font-size: 1.8rem;
    color: #767676;
    margin: 0px;
`;
export const ContainerBirthday = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const ContainerButton = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;
