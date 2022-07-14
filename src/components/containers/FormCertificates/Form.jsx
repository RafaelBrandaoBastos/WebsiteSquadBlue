import React, {useContext, useEffect, useState} from 'react';
import Input from "../../micro/Input/Input"
import {Form, ErrorMessage, ContainerButton, ContainerCertificates, ContainerButtonsMore, ContainerButtonsCertificatesMore, ContainerTeamname, ContainerInstitution, ContainerGraduation} from "./formStyled.js"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TabsContext} from '../../../contexts/TabsProvider';
import Button from '../../micro/Button/Button';
import { ContainerMessageMore, ErrorMessageMore } from '../../micro/Button/buttonStyled';
import {UserDataContext} from '../../../contexts/UserDataProvider';

const schema = yup
    .object({
        certificates: yup
            .string()
            .required('Please enter your Certificates')
            .matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Certificate Link Invalid'),
            teamname: yup
            .string()
            .required('Please enter your Team Name')
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,'Team Name Invalid'),
            institution: yup
            .string()
            .required('Please enter your Institution')
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,'Institution Name Invalid'),
            graduation: yup
            .string()
            .required('Please enter your Graduation')
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,'Graduation Name Invalid'),
    })
    .required();
    
    
const FormCertificates = ()=>{

    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData, setUserData] = useContext(UserDataContext);

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        setUserData({...userData, ...data});
        setSelectedTab(selectedTab + 1);
        SetData;
    }
    const SetData = () => {
        localStorage.setItem("StorageCertificates", JSON.stringify(getValues()));
    };


    const GetData = () => {
        if (localStorage.getItem("StorageCertificates")) { 
            const StorageData = JSON.parse(localStorage.getItem("StorageCertificates"));
            const keys = Object.keys(StorageData);
            keys.forEach((key) => {
                setValue(key, StorageData[key])
            })
        }
    }

    useEffect(() => {
        GetData()
        window.addEventListener('beforeunload', SetData); 
        return() => {
            window.removeEventListener('beforeunload', SetData);     
        }
    }, []);
    

    useEffect(() => {
        if (userData) {
            const keys = Object.keys(userData);
            keys.forEach((key) => {
                setValue(key, userData[key]);
            });
        }
    });

    return( 
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerCertificates>
                <Input 
                width="100%" 
                label = "Certificates" 
                type="text" 
                placeholder="https://www.Certificate.com" 
                {...{register: register('certificates')}}                
                />
                <ErrorMessage style={{left: '80px'}}>{errors.certificates?.message}</ErrorMessage> 
            </ContainerCertificates>
            
            <ContainerButtonsMore>
            <ContainerButtonsCertificatesMore>
                <Button name="Certificates" type="submit"/>
                <Button name="More" type="submit" />
            </ContainerButtonsCertificatesMore>

            <ContainerMessageMore>
                <ErrorMessageMore>Sorry, only 5 certificates are allowed.</ErrorMessageMore>
                <ErrorMessageMore>You can remove one certificate instead.</ErrorMessageMore>
            </ContainerMessageMore>

            </ContainerButtonsMore>

            <ContainerTeamname>
                <Input 
                width="100%" 
                label = "Team Name" 
                type="text" 
                placeholder="Team Green" 
                {...{register: register('teamname')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.teamname?.message}</ErrorMessage>
            </ContainerTeamname>

            <ContainerInstitution>
                <Input 
                width="100%" 
                label = "Institution" 
                type="text" 
                placeholder="Universidade Federal da Paraíba" 
                {...{register: register('institution')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.institution?.message}</ErrorMessage>
            </ContainerInstitution>

            <ContainerGraduation>
                <Input 
                width="100%" 
                label = "Graduation" 
                type="text" placeholder="Ciências da Computação" 
                {...{register: register('graduation')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.graduation?.message}</ErrorMessage>
            </ContainerGraduation>

            <ContainerButton>
                <Button name='Finish' type='submit'/>
            </ContainerButton>     
        </Form> 
    )  
}; 
export default FormCertificates;