import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Define a largura como 100% para ocupar a largura total */
    margin: 20px;

    @media (max-width: 768px) {
        width: 100%;
        height: 50px;
        margin: 10px;
        font-size: 18px;
    }
`;

export const Input1 = styled.input`
    color: #ffffff;
    width: 50%; 
    padding: 0.5rem;
    margin: 0.5rem;
    display: block;
    border: 1px solid #999999;
    border-radius: 20px;
    background: transparent;
    font-size: 20px;
    text-align: center;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 50%; 
        margin: 10px;
        font-size: 18px;
    }
`;