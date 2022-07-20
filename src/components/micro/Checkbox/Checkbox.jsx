import React from "react";
import {
    CustomCheckbox,
    HiddenCheckbox,
    Checkmark,
    Terms,
} from './checkboxStyled';

const Checkbox = ({name, onChange, register}) => {
    return (
        <CustomCheckbox>
            <HiddenCheckbox
                type='checkbox'
                name={name}
                onChange={onChange}
                {...register}
            />
            <Checkmark />
            <Terms>I accept the terms and privacy</Terms>
        </CustomCheckbox>
    );
};

export default Checkbox;
