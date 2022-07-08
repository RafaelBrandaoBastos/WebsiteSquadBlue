import React from "react";
import { ButtonNextStyled, ButtonMoreStyled, ButtonFinishStyled, ButtonReturnStyled, ButtonCertificatesStyled } from "./buttonStyled";
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

    if(props.name=="Finish")
    return(
      <ButtonFinishStyled name={props.name} type={props.type}> {props.name}</ButtonFinishStyled>
    )

    if (props.name=="Return")
    return(
      <ButtonReturnStyled  name={props.name} type={props.type}> {props.name}</ButtonReturnStyled> 
    )

    if (props.name=="Certificates")
    return(
      <ButtonCertificatesStyled name={props.name} type={props.type}> {props.name}</ButtonCertificatesStyled>
    )
}

export default Button;