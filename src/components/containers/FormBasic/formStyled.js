import styled from "styled-components";

export const Form = styled.form`
    min-height: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    outline-style: solid;
    width: 100%;
    @media (max-width: 600px) {
        min-height: 85%;
        }
`;

export const ContainerEmailPhone = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    outline-style: solid;
    outline-color: blue;
`;

export const ContainerPhone = styled.div`
    width: 35%;
    margin-top: 0px;
    @media (max-width: 600px) {
        margin-top: 10px;
        width: 100%;
        }
`;
export const ContainerEmail = styled.div`
    width: 60%;
    outline-style: solid;
    outline-color: blue;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const DayMonth = styled.div`
    display: flex;
    width: 47.5%;
    outline-style: solid;
    outline-color: blue;
    justify-content: space-between;
    margin-top: 0px;
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 10px;
        }
`;
export const YearAge = styled.div`
    display: flex;
    width: 47.5%;
    outline-style: solid;
    outline-color: blue;
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