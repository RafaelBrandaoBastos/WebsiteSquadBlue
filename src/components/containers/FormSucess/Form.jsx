import React, {useContext} from 'react';
import {MainContainer, ContainerButton, Text} from "./formStyled.js"
import Button from '../../micro/Button/Button';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import {TabsContext} from '../../../contexts/TabsProvider';

const FormSucess = ()=>{
    
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData, setUserData]= useContext(UserDataContext);
    
    const removedata = () => {
        setSelectedTab(0);
        localStorage.clear();
        setUserData("");
    };
    return( 
        <MainContainer>
            <div>
                <Text>Your data has been sent successfully!</Text>
                <Text>Full Name: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>
                <Text>Birthday: {userData.day}/{userData.month}/{userData.year}</Text>
                <Text>Age: {userData.age}</Text>
                <Text>Github: {userData.github}</Text>
                <Text>Certificates: {userData.certificates}</Text>
                <Text>Team Name: {userData.teamname}</Text>
                <Text>Institution: {userData.institution}</Text>
                <Text>Graduation: {userData.graduation}</Text>
            </div>
                <ContainerButton>
                    <Button name='Return' type='button' onClick = {() => removedata()}/>
                </ContainerButton>     
        </MainContainer> 
    )
};
  
export default FormSucess;

