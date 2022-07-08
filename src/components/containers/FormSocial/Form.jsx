import React from "react";
import Input from "../../micro/Input/Input"
import {Form} from "./formStyled.js"

const FormSocial = ()=>{
    return( 
        <Form>
            <Input width="100%" label = "Linkedin" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" /> 
            <Input width="100%" label = "Github" type="text" placeholder="https://github.com/foobar" />     
        </Form> 
    )
};
  
export default FormSocial;