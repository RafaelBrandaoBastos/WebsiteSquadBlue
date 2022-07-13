import React, {useContext} from 'react';
import {Form, ContainerButton, Text} from "./formStyled.js"
import Button from '../../micro/Button/Button';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import {TabsContext} from '../../../contexts/TabsProvider';

const FormSucess = ()=>{
    
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData, setUserData]= useContext(UserDataContext);
    const data = userData[0];
    
    const removedata = () => {
        setSelectedTab(0);
        localStorage.removeItem("StorageCertificates")
        localStorage.removeItem("StorageSocial")
        localStorage.removeItem("StorageBasic")
        /*setUserData("");*/
    };
    return( 
        <div>
            <Text>Your data has been sent successfully!</Text>
            <Text>Full Name:{data.name}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Birthday: {data.day}/{data.month}/{data.year}</Text>
            <Text>Age: {data.age}</Text>
            <Text>Github: {data.github}</Text>
            <Text>Certificates: {data.certificates}</Text>
            <Text>Team Name: {data.teamname}</Text>
            <Text>Institution: {data.institution}</Text>
            <Text>Graduation: {data.graduation}</Text>
            <ContainerButton>
                <Button name='Return' type='button' onClick = {() => removedata()}/>
            </ContainerButton>     
        </div> 
    )
};
  
export default FormSucess;

