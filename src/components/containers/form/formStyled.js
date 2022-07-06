import styled from "styled-components";

export const Form = styled.form`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    outline-style: solid;
    width: 100%;
`;

export const ContainerFullName = styled.div`
    width: 100%;
    outline-style: solid;
    outline-color: blue;
`;

export const ContainerNickname = styled.div`
    width: 100%;
    outline-style: solid;
    outline-color: blue;
`;

export const ContainerEmailPhone = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    outline-style: solid;
    outline-color: blue;
`;

export const DayMonth = styled.div`
    display: flex;
    width: 50%;
    outline-style: solid;
    outline-color: blue;
    @media (max-width: 600px) {
        width: 100%;
        }
`;

export const YearAge = styled.div`
    display: flex;
    width: 50%;
    outline-style: solid;
    outline-color: blue;
    @media (max-width: 600px) {
        width: 100%;
        }
`;



export const ContainerEmail = styled.div`
    width: 50%;
    outline-style: solid;
    outline-color: blue;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerPhone = styled.div`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerDay = styled.div`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerMonth = styled.div`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerYear = styled.div`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerAge = styled.div`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
        }
`;