import React from 'react';
import { InputContainer, Input1 } from './styles.js';

function Input({ value, onChange }) {
    return (
        <InputContainer>
            <Input1 value={value} onChange={onChange} placeholder="@username" />
        </InputContainer>
    );
}

export default Input;
