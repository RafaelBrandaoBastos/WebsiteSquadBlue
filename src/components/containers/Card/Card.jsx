import React from "react";
import {ContainerCard, CardStyled} from "./cardStyled";
import FormBasic from "../FormBasic/form";
import  Title  from "../../micro/Title/Title";
import Tabs from "../../micro/Tabs/Tabs";

const Card = ({})=>{
    
    return(
        <ContainerCard>    
            <CardStyled>
                <Title/>
                <Tabs/>
            </CardStyled>
        </ContainerCard>
    )
}

export default Card;

