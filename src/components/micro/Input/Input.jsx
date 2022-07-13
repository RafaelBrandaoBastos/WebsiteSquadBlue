import React from 'react';
import {InputGlobal, Label, Container} from './inputStyled.js';

const Input = ({
    type,
    placeholder,
    register,
    className,
    inputdata,
    label,
    width,
    height,
    onChangeCapture,
    readOnly,
}) => {
    return (
        <Container style={{width: `${width}`}}>
            <Label>{label}</Label>
            <InputGlobal
                style={{height: `${height}`}}
                type={type}
                defaultValue={inputdata}
                editable={true}
                placeholder={placeholder}
                {...register}
                className={className}
                onChangeCapture={onChangeCapture}
                readOnly={readOnly}
            />
        </Container>
    );
};
export default Input;
