import React, {useContext, useEffect} from 'react';
import Input from '../../micro/Input/Input';
import {
    Form,
    ErrorMessage,
    ContainerButton,
    ContainerLinkedin,
    ContainerGithub,
} from './formStyled.js';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TabsContext} from '../../../contexts/TabsProvider';
import Button from '../../micro/Button/Button';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import {formSocialSchema} from '../../../utils/yupSchema';

const FormSocial = () => {
    const [userData, setUserData] = useContext(UserDataContext);
    const [selectedTab, setSelectedTab] = useContext(TabsContext);

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors},
    } = useForm({resolver: yupResolver(formSocialSchema)});

    const onSubmit = (data) => {
        setSelectedTab(selectedTab + 1);
        setUserData({...userData, ...data});
        SetData();
    };

    const SetData = () => {
        localStorage.setItem('StorageSocial', JSON.stringify(getValues()));
    };

    const GetData = () => {
        if (localStorage.getItem('StorageSocial')) {
            const StorageData = JSON.parse(
                localStorage.getItem('StorageSocial'),
            );
            const keys = Object.keys(StorageData);
            keys.forEach((key) => {
                setValue(key, StorageData[key]);
            });
        }
    };

    useEffect(() => {
        GetData();
        window.addEventListener('beforeunload', SetData());
        return () => {
            window.removeEventListener('beforeunload', SetData());
        };
    }, []);

    useEffect(() => {
        if (userData) {
            const keys = Object.keys(userData);
            keys.forEach((key) => {
                setValue(key, userData[key]);
            });
        }
    });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerLinkedin>
                <Input
                    width='100%'
                    label='Linkedin'
                    type='text'
                    placeholder='https://www.linkedin.com/in/foo-bar-3a0560104/'
                    {...{register: register('linkedin')}}
                />
                <ErrorMessage style={{left: '80px'}}>
                    {errors.linkedin?.message}
                </ErrorMessage>
            </ContainerLinkedin>

            <ContainerGithub>
                <Input
                    width='100%'
                    label='Github'
                    type='text'
                    placeholder='https://github.com/foobar'
                    {...{register: register('github')}}
                />
                <ErrorMessage style={{left: '80px'}}>
                    {errors.github?.message}
                </ErrorMessage>
            </ContainerGithub>

            <ContainerButton>
                <Button name='Next' type='submit' />
            </ContainerButton>
        </Form>
    );
};

export default FormSocial;
