import React from "react";
import { ButtonStyled, ContainerButton } from "./buttonStyled";

const Button = (props)=>{
    return(
    <ContainerButton>
    <ButtonStyled name={props.name} type={props.type}>{props.name}</ButtonStyled>
    </ContainerButton>
    )
}

export default Button;
