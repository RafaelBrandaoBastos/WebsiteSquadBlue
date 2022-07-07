import React from "react";
import {ContainerCard, CardStyled} from "./cardStyled";
import  Title  from "../../micro/Title/Title";
import Tabs from "../../micro/Tabs/Tabs";
import Button from "../../micro/Button/Button";

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

