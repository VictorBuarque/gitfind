import React from 'react';
import { ButtonContainer,Button1 } from './styles';

function Button({onClick}) {
    return (
        <ButtonContainer >
            <Button1 onClick={onClick}>Buscar</Button1>
        </ButtonContainer>
    );
}

export default Button;
