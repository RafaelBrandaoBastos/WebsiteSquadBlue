import styled from "styled-components";

export const Form = styled.form`
    min-height: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 600px) {
        min-height: 85%;
        }
`;

export const ContainerName = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: 600px) {
        height: 8%;
        }
`;

export const ContainerNickname = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: 600px) {
        height: 8%;
        }
`;

export const ContainerEmailPhone = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 600px) {
        height: 24%;
        }
`;

export const ContainerPhone = styled.div`
    position: relative;
    width: 35%;
    margin-top: 0px;
    @media (max-width: 600px) {
        width: 100%;
        }
`;
export const ContainerEmail = styled.div`
    width: 60%;
    position: relative;
    margin-bottom: 5px;
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
font-family: 'Nunito';
display: flex;
width: 100%;
font-style: normal;
align-items: flex-start;
font-weight: 700;
font-size: 1.4rem;
line-height: 24px;
text-align: center;
color: red;
position: absolute;
top: 0;
left: 30px;
`;
export const Label = styled.p`
    width: 100%;
    height: 5%;
    font-size: 1.8rem;
    color: #767676;
    font-style: normal;
    margin: 0px;
`;
export const ContainerBirthday = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;