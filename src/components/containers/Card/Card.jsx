import React from "react";
import {ContainerCard, CardStyled} from "./cardStyled";

export const Card = ({children})=>{
    
    return(
        <ContainerCard>
             <CardStyled>{children}</CardStyled>
        </ContainerCard>
    )
}

