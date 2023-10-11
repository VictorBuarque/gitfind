import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 100%;
    margin: 10px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px;
        font-size: 18px;
    }
`;

export const Button1 = styled.button`
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

    &:hover {
        background-color: #c48e00; 
        color: #fff;
    }
`;
