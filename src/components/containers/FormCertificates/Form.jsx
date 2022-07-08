import React from "react";
import Input from "../../micro/Input/Input"
import {Form} from "./formStyled.js"

const FormCertificates = ()=>{
    return( 
        <Form>
            <Input width="100%" label = "Certificates" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" /> 
            <Input width="100%" label = "Team Name" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
            <Input width="100%" label = "Institution" type="text" placeholder="Universidade Federal da Paraíba" />
            <Input width="100%" label = "Graduation" type="text" placeholder="Ciências da Computação" />                
        </Form> 
    )
};
  
export default FormCertificates;