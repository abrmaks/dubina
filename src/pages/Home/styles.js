import styled from 'styled-components';

export const Button = styled.button`

`;

export const Area = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${({value}) => value ?  '#555' : '#cd2a3f'};
    margin-top: 10px;
`;