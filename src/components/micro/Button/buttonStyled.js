import styled from "styled-components";
import NextIcon from "../../../assets/nextIcon.svg";

export const ButtonNextStyled = styled.button`

width: 8.1rem;
height: 4rem;
background: #074EE8;
border-radius: 0.4rem;
font-size: 1.6rem;
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


export const ButtonMoreStyled = styled.button`
width: 10.9rem;
height: 4rem;
background: #074EE8;
border-radius: 0.4rem;
font-size: 1.6rem;
display: flex;
align-items: center;
justify-content: center;
position:relative;
color: #FFFFFF;
border: none;

&:hover {
    cursor: pointer;
    background-color: #20b7d8;
}
`;