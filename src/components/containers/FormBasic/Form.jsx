import React from "react";
import Input from "../../micro/Input/Input";
import Button from "../../micro/Button/Button";
import Checkbox from "../../micro/Checkbox/Checkbox";
import {Form, ContainerEmailPhone, DayMonth, YearAge, ContainerEmail, ContainerPhone, ContainerDay, ContainerMonth, ContainerYear, ContainerAge} from "./formStyled.js"

const FormBasic = ()=>{
    return( 
        <Form>
                <Input width="100%" height = "40px" label = "Full Name" type="text" placeholder="Foo Bar" />
                <Input width="100%" height = "40px" label = "Nickname" type="text" placeholder="Juanito" />

            <ContainerEmailPhone>
                <ContainerEmail>
                    <Input width="100%" height = "40px" label = "Email" type="text" placeholder="foo@bar.com" />
                </ContainerEmail>
                <ContainerPhone>
                        <Input width="100%" height = "40px" label = "Phone" type="number" placeholder="(83 0000-0000)" />
                </ContainerPhone>
            </ContainerEmailPhone>

            <DayMonth>
                <ContainerDay>
                    <Input width="100%" height = "40px" label = "Day" type="number" placeholder="01" />
                </ContainerDay>
                <ContainerMonth>
                    <Input width="100%" height = "40px" label = "Month" type="number" placeholder="01" />
                </ContainerMonth>
            </DayMonth>

            <YearAge>
                <ContainerYear>
                    <Input width="100%" height = "40px" label = "Year" type="number" placeholder="1991" />
                </ContainerYear>
                <ContainerAge>
                    <Input width="100%" height = "40px" label = "Age" type="number" placeholder="18" />
                </ContainerAge>
            </YearAge>
            <Checkbox/>
            <Button name="Next" type="submit"/>    
        </Form> 
        
    )
};
  
export default FormBasic;