import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999999;
    border-radius: 22px;
    width: 80%;
    height: 62px;
    margin: 20px;
    text-align: center;

    input {
        color: #ffffff;
        widht: 80%;
        height: 62px;
        background: transparent;
        padding: 0 20px;
        font-size: 20px;
        border: 0;
        text-align: center;
        
    }
    @media (max-width: 768px) {
        width: 80%; 
        height: 50px;
        margin: 10px;
        font-size: 18px;
        
        input {
            widht: 80%;
            height: 50px;
            background: transparent;
            font-size: 18px;
            
            text-align: center;
            
        }
`;
