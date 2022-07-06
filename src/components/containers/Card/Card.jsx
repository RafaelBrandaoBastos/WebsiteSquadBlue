import React from "react";
import {ContainerCard, CardStyled} from "./cardStyled";
import FormBasic from "../FormBasic/form";

const Card = ({})=>{
    
    return(
        <ContainerCard>    
            <CardStyled>
                <FormBasic />
            </CardStyled>
        </ContainerCard>
    )
}

export default Card;

