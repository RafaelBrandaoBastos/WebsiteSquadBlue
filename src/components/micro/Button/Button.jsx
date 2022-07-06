import React from "react";
import { ButtonStyled } from "./buttonStyled";

const Button = (props)=>{
    return(
    <ButtonStyled name={props.name} type={props.type}>{props.name}</ButtonStyled>
    )
}

export default Button;
