import React from 'react';
import {CardStyled} from "./cardStyled";
import  Title  from "../../micro/Title/Title";
import Tabs from "../../micro/Tabs/Tabs";


const Card = ({})=>{
   
    return(
            <CardStyled>
                <Title/>
                <Tabs/>
            </CardStyled>
    )
}

export default Card;

