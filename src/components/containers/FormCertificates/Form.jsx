import React, {useContext} from 'react';
import Input from "../../micro/Input/Input"
import {Form, ErrorMessage, ContainerButton, ContainerCertificates, ContainerTeamname, ContainerInstitution, ContainerGraduation} from "./formStyled.js"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TabsContext} from '../../../contexts/TabsProvider';
import Button from '../../micro/Button/Button';


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

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        setSelectedTab(selectedTab + 1);
        console.log(data);
    };

    return( 
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerCertificates>
                <Input width="100%" label = "Certificates" type="text" placeholder="https://www.Certificate.com" {...{register: register('certificates')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.certificates?.message}</ErrorMessage> 
            </ContainerCertificates>

            <ContainerTeamname>
                <Input width="100%" label = "Team Name" type="text" placeholder="Team Green" {...{register: register('teamname')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.teamname?.message}</ErrorMessage>
            </ContainerTeamname>

            <ContainerInstitution>
                <Input width="100%" label = "Institution" type="text" placeholder="Universidade Federal da Paraíba" {...{register: register('institution')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.institution?.message}</ErrorMessage>
            </ContainerInstitution>

            <ContainerGraduation>
                <Input width="100%" label = "Graduation" type="text" placeholder="Ciências da Computação" {...{register: register('graduation')}}/>
                <ErrorMessage style={{left: '80px'}}>{errors.graduation?.message}</ErrorMessage>
            </ContainerGraduation>

            <ContainerButton>
                <Button name='Finish' type='submit'/>
            </ContainerButton>     
        </Form> 
    )  
}; 
export default FormCertificates;


