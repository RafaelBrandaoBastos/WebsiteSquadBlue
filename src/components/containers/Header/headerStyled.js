import styled from "styled-components";

export const ContainerHeader = styled.header`
height: 18rem;
max-width: 100%;
background: #e5e5e5;
padding: 5.15rem 7.11rem 5.25rem 11.8rem;
border-bottom: 1px solid #AAAAAA;

@media (max-width: 600px){
height: 10rem;    
padding: 2.28rem 3.16rem 2.33rem 5.24rem;
}

`;

export const SmallTitleHeader = styled.h3`
font-family: 'Inter';
font-size: 1.8rem;
line-height: 2.4rem;
color: #111111;
margin-bottom:0.4rem;
margin-top:0;

@media (max-width: 600px){
margin-bottom:0.2rem;  
}

`;

export const BigestTitleHeader = styled.h1`
font-family: 'Inter';
font-weight: 700;
font-size: 4rem;
line-height: 4.8rem;
color: #074EE8;
margin: 0;

@media (max-width: 600px){
font-size:2rem;
}
`;