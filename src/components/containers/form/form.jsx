import React from "react";
import Input from "../../micro/input/input"
import {Form, ContainerFullName, ContainerNickname, ContainerEmailPhone, DayMonth, YearAge, ContainerEmail, ContainerPhone, ContainerDay, ContainerMonth, ContainerYear, ContainerAge} from "./formStyled.js"

const FunctionForm = ()=>{

    return( 
        <Form>

            <ContainerFullName>
                <Input label = "Full Name" type="text" placeholder="Foo Bar" />
            </ContainerFullName>

            <ContainerNickname>
                <Input label = "Nickname" type="text" placeholder="Juanito" />
            </ContainerNickname>
            
            <ContainerEmailPhone>

            <ContainerEmail>
                <Input label = "Email" type="text" placeholder="foo@bar.com" />
            </ContainerEmail>

                <ContainerPhone>
                    <Input label = "Phone" type="number" placeholder="(83 0000-0000)" />
                </ContainerPhone>

            </ContainerEmailPhone>

            <DayMonth>
                <ContainerDay>
                    <Input label = "Day" type="number" placeholder="01" />
                </ContainerDay>
                <ContainerMonth>
                    <Input label = "Month" type="number" placeholder="01" />
                </ContainerMonth>
            </DayMonth>

            <YearAge>
                <ContainerYear>
                    <Input label = "Year" type="number" placeholder="1991" />
                </ContainerYear>
                <ContainerAge>
                    <Input label = "Age" type="number" placeholder="18" />
                </ContainerAge>
            </YearAge>
        </Form> 

    )
};
  
export default FunctionForm;