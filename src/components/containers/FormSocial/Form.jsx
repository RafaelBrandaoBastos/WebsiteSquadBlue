import React from "react";
import Input from "../../micro/Input/Input"
import {Form, ContainerEmailPhone, DayMonth, YearAge, ContainerEmail, ContainerPhone, ContainerDay, ContainerMonth, ContainerYear, ContainerAge} from "./formStyled.js"

const FormBasic = ()=>{
    return( 
        <Form>
                <Input width="100%" height = "40px" label = "Linkedin" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
                <Input width="100%" height = "40px" label = "Github" type="text" placeholder="https://github.com/foobar" />
        </Form> 
    )
};
  
export default FormBasic;