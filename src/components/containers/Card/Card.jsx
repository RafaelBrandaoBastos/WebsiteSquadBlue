import React from "react";
import {ContainerCard, CardStyled} from "./cardStyled";

const Card = ({children})=>{
    
    return(
        <ContainerCard>
             <CardStyled>{children}</CardStyled>
        </ContainerCard>
    )
}

export default Card;

