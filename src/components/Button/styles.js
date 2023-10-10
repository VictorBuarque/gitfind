import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999999;
    border-radius: 20px;
    width: 80%;
    height: 62px;
    margin: 20px;
    background: transparent;
    color: #999999;
    font-size: 20px;

    &: hover {
        background-color: #c48e00;
        color: #fff;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 80%; 
        height: 50px;
        margin: 10px;
        font-size: 18px;
`;
