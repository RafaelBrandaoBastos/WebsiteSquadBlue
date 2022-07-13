import React, {useContext, useEffect} from 'react';
import * as yup from 'yup';
import Input from '../../micro/Input/Input';
import Button from '../../micro/Button/Button';
import Checkbox from '../../micro/Checkbox/Checkbox';
import {
    Form,
    ContainerName,
    ContainerNickname,
    ContainerBirthday,
    Label,
    ContainerEmailPhone,
    DayMonth,
    YearAge,
    ContainerEmail,
    ContainerPhone,
    ContainerDay,
    ContainerMonth,
    ContainerYear,
    ContainerAge,
    ErrorMessage,
    ContainerButton,
    ContainerCheckbox,
} from './formStyled.js';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TabsContext} from '../../../contexts/TabsProvider';
import {UserDataContext} from '../../../contexts/UserDataProvider';
import {phoneMask} from '../../../utils/phoneMask';

const schema = yup
    .object({
        name: yup
            .string()
            .required('Please enter your Name')
            .matches(/^[\w]+(?:\s[\w]+)+$/, 'Fullname invalid'),
        nickname: yup.string().matches(),
        email: yup
            .string()
            .required('Please enter your Email')
            .matches(
                /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
                'Email invalid',
            ),
        phone: yup.string().optional().matches(),

        day: yup
            .number()
            .positive()
            .integer()
            .min(1)
            .max(31)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        month: yup
            .number()
            .positive()
            .integer()
            .min(1)
            .max(12)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        year: yup
            .number()
            .positive()
            .integer()
            .min(1901)
            .max(2004)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        age: yup
            .number()
            .positive()
            .integer()
            .required('Please enter your age')
            .typeError('Please enter your age'),

        checkbox: yup.boolean().isTrue('Please confirm the terms'),
    })
    .required();

const FormBasic = () => {
    const [userData, setUserData] = useContext(UserDataContext);
    const [selectedTab, setSelectedTab] = useContext(TabsContext);

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
        getValues,
    } = useForm({resolver: yupResolver(schema)});

    const watchFields = watch(['month', 'day', 'year']);

    useEffect(() => {
        const dateOfBirthday = new Date(
            `${watchFields[2]}-${watchFields[0]}-${watchFields[1]}`,
        );
        const diff = Date.now() - dateOfBirthday.getTime();
        const year = new Date(diff).getUTCFullYear();
        const age = Math.abs(year - 1970);

        setValue('age', age);
    }, [watchFields]);

    const onSubmit = (data) => {
        setUserData({...userData, ...data});
        setSelectedTab(selectedTab + 1);
        SetData;
    };
    const SetData = () => {
        localStorage.setItem("StorageData", JSON.stringify(getValues()));
    };


    // Volta informações para os campos

    useEffect(() => {
        if (userData) {
            const keys = Object.keys(userData);
            keys.forEach((key) => {
                setValue(key, userData[key]);
            });
        }
    }, []);

    const GetData = () => {
        if (localStorage.getItem("StorageData")) { 
            const StorageData = JSON.parse(localStorage.getItem("StorageData"));
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

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerName>
                <Input
                    width='100%'
                    label='Full Name'
                    type='text'
                    placeholder='Foo Bar'
                    {...{register: register('name')}}
                />
                {errors.name && (
                    <ErrorMessage style={{left: '80px'}}>
                        {errors.name?.message}
                    </ErrorMessage>
                )}
            </ContainerName>

            <ContainerNickname>
                <Input
                    width='100%'
                    label='Nickname'
                    type='text'
                    placeholder='Juanito'
                    {...{register: register('nickname')}}
                />
                {errors.nickname && (
                    <ErrorMessage style={{left: '75px'}}>
                        {errors.nickname?.message}
                    </ErrorMessage>
                )}
            </ContainerNickname>

            <ContainerEmailPhone>
                <ContainerEmail>
                    <Input
                        width='100%'
                        label='Email'
                        type='text'
                        placeholder='foo@bar.com'
                        {...{register: register('email')}}
                    />
                    {errors.email && (
                        <ErrorMessage style={{left: '50px'}}>
                            {errors.email?.message}
                        </ErrorMessage>
                    )}
                </ContainerEmail>
                <ContainerPhone>
                    <Input
                        width='100%'
                        label='Phone'
                        type='tel'
                        placeholder='(83 0000-0000)'
                        onChangeCapture={(e) => phoneMask(e)}
                        {...{register: register('phone')}}
                    />
                    {errors.phone && (
                        <ErrorMessage style={{left: '55px'}}>
                            {errors.phone?.message}
                        </ErrorMessage>
                    )}
                </ContainerPhone>
            </ContainerEmailPhone>

            <ContainerBirthday>
                <Label>Birthday</Label>
                {(errors.day || errors.month || errors.year) && (
                    <ErrorMessage style={{left: '80px'}}>
                        Please enter your age
                    </ErrorMessage>
                )}
                <DayMonth>
                    <ContainerDay>
                        <Input
                            width='100%'
                            label='Day'
                            type='number'
                            placeholder='01'
                            {...{register: register('day')}}
                        />
                    </ContainerDay>
                    <ContainerMonth>
                        <Input
                            width='100%'
                            label='Month'
                            type='number'
                            placeholder='01'
                            {...{register: register('month')}}
                        />
                    </ContainerMonth>
                </DayMonth>
                <YearAge>
                    <ContainerYear>
                        <Input
                            width='100%'
                            label='Year'
                            type='number'
                            placeholder='1991'
                            {...{register: register('year')}}
                        />
                    </ContainerYear>
                    <ContainerAge>
                        <Input
                            width='100%'
                            label='Age'
                            type='number'
                            placeholder='18'
                            {...{register: register('age')}}
                            disabled
                        />
                    </ContainerAge>
                </YearAge>
            </ContainerBirthday>
            <ContainerCheckbox>
                <Checkbox {...{register: register('checkbox')}} />
                {errors.checkbox && (
                    <ErrorMessage style={{right: '90px'}} className='checkbox'>
                        {errors.checkbox?.message}
                    </ErrorMessage>
                )}
            </ContainerCheckbox>
            <ContainerButton>
                <Button name='Next' type='submit'/>
            </ContainerButton>
        </Form>
    );
};

export default FormBasic;
