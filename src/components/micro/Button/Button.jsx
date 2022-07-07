import React from "react";
import { ButtonNextStyled, ButtonMoreStyled } from "./buttonStyled";
import {TbPlus} from "react-icons/tb";
import {MdNavigateNext} from "react-icons/md";

const Button = (props)=>{
    if(props.name=="Next")
    return(
    <ButtonNextStyled name={props.name} type={props.type}>{props.name}</ButtonNextStyled>
    )

    if(props.name=="More")
    return(
      <ButtonMoreStyled name={props.name} type={props.type}>
        {props.name}
        <TbPlus color={"white"} size={"2rem"} style={{position:"absolute", left: "10%"}}/>
        <MdNavigateNext color="white" size="2.5rem" style={{position:"absolute", right: "8%"}} />
      </ButtonMoreStyled>
    )
}

export default Button;