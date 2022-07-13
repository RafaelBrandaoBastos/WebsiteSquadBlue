import React, {useContext} from 'react';
import { ContainerTitle, TitleStyled } from "./titleStyled";
import {TabsContext} from '../../../contexts/TabsProvider';

const Title = ({})=>{
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
    return(
      <ContainerTitle className={selectedTab === 3 && "none"}>
        <TitleStyled>
            Team Sign Up
        </TitleStyled>
      </ContainerTitle>
    )

}

export default Title;
