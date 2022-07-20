import React, {useContext} from 'react';
import {CardStyled} from './cardStyled';
import Title from '../../micro/Title/Title';
import Tabs from '../Tabs/Tabs';
import {TabsContext} from '../../../contexts/TabsProvider';

const Card = () => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);

    return (
        <CardStyled className={selectedTab === 3 && 'small'}>
            <Title />
            <Tabs />
        </CardStyled>
    );
};

export default Card;
