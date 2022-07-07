import React from "react";
import Input from "../../micro/Input/Input";
import Button from "../../micro/Button/Button";
import Checkbox from "../../micro/Checkbox/Checkbox";
import {Form, ContainerName, ContainerNickname, ContainerBirthday, Label, ContainerEmailPhone, DayMonth, YearAge, ContainerEmail, ContainerPhone, ContainerDay, ContainerMonth, ContainerYear, ContainerAge, ErrorMessage} from "./formStyled.js"

const FormBasic = ()=>{
    return( 
        <Form>
            <ContainerName>
                <Input width="100%" label = "Full Name" type="text" placeholder="Foo Bar" />
                <ErrorMessage style={{left: "80px"}}>Invalid</ErrorMessage>
            </ContainerName>

            <ContainerNickname>
                <Input width="100%" label = "Nickname" type="text" placeholder="Juanito" />
                <ErrorMessage style={{left: "75px"}}>Invalid</ErrorMessage>
            </ContainerNickname>

            <ContainerEmailPhone>
                <ContainerEmail>
                    <Input width="100%" label = "Email" type="text" placeholder="foo@bar.com" />
                    <ErrorMessage style={{left: "50px"}}>Invalid</ErrorMessage>
                </ContainerEmail>
                <ContainerPhone>
                        <Input width="100%" label = "Phone" type="number" placeholder="(83 0000-0000)" />
                        <ErrorMessage style={{left: "55px"}}>Invalid</ErrorMessage>
                </ContainerPhone>
            </ContainerEmailPhone>


            <ContainerBirthday>
                <Label>Birthday</Label>
                <ErrorMessage style={{left: "80px"}}>Invalid</ErrorMessage>
                <DayMonth>
                <ContainerDay>
                    <Input width="100%" label = "Day" type="number" placeholder="01" />
                </ContainerDay>
                <ContainerMonth>
                    <Input width="100%" label = "Month" type="number" placeholder="01" />
                </ContainerMonth>
            </DayMonth>
            <YearAge>
                <ContainerYear>
                    <Input width="100%" label = "Year" type="number" placeholder="1991" />
                </ContainerYear>
                <ContainerAge>
                    <Input width="100%" label = "Age" type="number" placeholder="18" />                   
                </ContainerAge>
            </YearAge>
            </ContainerBirthday>
            
            <Checkbox/>
            <Button name="Next" type="submit"/>    
        </Form> 
        
    )
};
  
export default FormBasic;