import React from "react";
import Input from "../../micro/Input/Input";
import Button from "../../micro/Button/Button";
import Checkbox from "../../micro/Checkbox/Checkbox";
import {Form, ContainerEmailPhone, DayMonth, YearAge, ContainerEmail, ContainerPhone, ContainerDay, ContainerMonth, ContainerYear, ContainerAge} from "./formStyled.js"

const FormBasic = ()=>{
    return( 
        <Form>
                <Input width="100%" height = "40px" label = "Full Name" type="text" placeholder="Foo Bar" />
                <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                <Input width="100%" height = "40px" label = "Nickname" type="text" placeholder="Juanito" />
                <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>

            <ContainerEmailPhone>
                <ContainerEmail>
                    <Input width="100%" height = "40px" label = "Email" type="text" placeholder="foo@bar.com" />
                    <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerEmail>
                <ContainerPhone>
                        <Input width="100%" height = "40px" label = "Phone" type="number" placeholder="(83 0000-0000)" />
                        <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerPhone>
            </ContainerEmailPhone>

            <DayMonth>
                <ContainerDay>
                    <Input width="100%" height = "40px" label = "Day" type="number" placeholder="01" />
                    <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerDay>
                <ContainerMonth>
                    <Input width="100%" height = "40px" label = "Month" type="number" placeholder="01" />
                    <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerMonth>
            </DayMonth>

            <YearAge>
                <ContainerYear>
                    <Input width="100%" height = "40px" label = "Year" type="number" placeholder="1991" />
                    <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerYear>
                <ContainerAge>
                    <Input width="100%" height = "40px" label = "Age" type="number" placeholder="18" />
                    <ErrorMessage>Ops, usuário ou senha inválidos.Tente novamente!</ErrorMessage>
                </ContainerAge>
            </YearAge>
            <Checkbox/>
            <Button name="Next" type="submit"/>    
        </Form> 
        
    )
};
  
export default FormBasic;