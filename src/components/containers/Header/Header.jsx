import React from "react";
import {ContainerHeader, SmallTitleHeader, BigestTitleHeader } from "./headerStyled";
import {useContext} from 'react';
import {TabsContext} from '../../../contexts/TabsProvider';

const options = ['First', 'Second', 'Third', 'Success'];

const Header =()=>{
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    return(
    <ContainerHeader>
            <SmallTitleHeader>Forms</SmallTitleHeader>
            <BigestTitleHeader>{options[selectedTab]} Tab</BigestTitleHeader>
    </ContainerHeader>
    )
}

export default Header;