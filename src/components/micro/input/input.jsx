import React from "react";
import {InputGlobal, Label, Container} from "./inputStyled.js"

const Input = ({type, placeholder, register, className, inputdata, label})=>{

    return(
    <Container>
        <Label>{label}</Label>   
        <InputGlobal type={type} defaultValue={inputdata} editable={true} placeholder={placeholder} {...register} className={className}/>
    </Container>
    )
};
export default Input;
  