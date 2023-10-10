import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    
    h3{
        font-size:32px;
        color: #c48e00;
        
    }
    p{
        font-size: 24px;
        color: #FFFFFF;
    }
    a{
        color: #FF0000;
        text-decoration: none;
        
    }
    hr {
        border: none;
        border-top: 1px solid #666666;
        
    }
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        text-align: center;
        margin-bottom:5px;
        overflow: hidden; 

        h3{
            font-size:24px;
        }
        p{
            font-size: 18px
        }
        hr {
            border: none;
            border-top: 1px solid #666666;
            margin-top: 20px;
        }
    }
    

`;
