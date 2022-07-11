import styled from "styled-components";
import NextIcon from "../../../assets/nextIcon.svg";

export const ContainerButton = styled.div`
display:flex;
align-items: flex-end;
flex-direction: column;
width: 100%;
`;

export const ButtonStyled = styled.button`

width: 8.1rem;
height: 4rem;
background: #074EE8;
border-radius: 0.4rem;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 1.8rem;
display: flex;
align-items: center;
border: none;
color: #FFFFFF;
padding-left: 0.8em;
background-image: url(${NextIcon});
background-repeat: no-repeat;
background-position: 3.5em;
background-size: contain;

&:hover {
    cursor: pointer;
    background-color: #20b7d8;
}
`;