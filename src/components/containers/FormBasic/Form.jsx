import React, {useContext} from 'react';
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
        phone: yup
            .string()
            .optional()
            .matches(
                /^([(][0-9]{2}[)]) ([0-9]{5})-([0-9]{4})/,
                'Phone invalid',
            ),
        day: yup
            .number()
            .positive()
            .integer()
            .required('Please enter your age')
            .typeError('Please enter your age'),
        month: yup
            .number()
            .positive()
            .integer()
            .required('Please enter your age')
            .typeError('Please enter your age'),
        year: yup
            .number()
            .positive()
            .integer()
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
                {errors.day && (
                    <ErrorMessage style={{left: '80px'}}>
                        {errors.day?.message}
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
                <Button name='Next' type='submit' />
            </ContainerButton>
        </Form>
    );
};

export default FormBasic;
