import React from "react";
import { ButtonNextStyled, ButtonMoreStyled, ButtonFinishStyled } from "./buttonStyled";
import {TbPlus} from "react-icons/tb";
import {MdNavigateNext} from "react-icons/md";
import {TbCheck} from "react-icons/tb"

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

    if(props.name=="Finish")
    return(
      <ButtonFinishStyled name={props.name} type={props.type}> {props.name}</ButtonFinishStyled>
    )
}

export default Button;