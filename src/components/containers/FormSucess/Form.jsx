import React, {useContext, useEffect} from 'react';
import Input from "../../micro/Input/Input"
import {Form, ContainerButton} from "./formStyled.js"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TabsContext} from '../../../contexts/TabsProvider';
import Button from '../../micro/Button/Button';
import {UserDataContext} from '../../../contexts/UserDataProvider';

const FormSocial = ()=>{

    return( 
        <Form >
            
            <ContainerButton>
                <Button name='Next' type='submit' />
            </ContainerButton>     
        </Form> 
    )
};
  
export default FormSocial;

