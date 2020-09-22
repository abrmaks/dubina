import styled from 'styled-components';
import { screenSizeSmall } from './screenSize';

export const SectionBlock = styled.section`
    padding: 50px;
`;

export const Container = styled.div`
    max-width: 1120px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
`;

export const FlexItem = styled.div`
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${screenSizeSmall}) {
        display: -webkit-flex;
        -webkit-flex-direction: column;
        display: flex;
        flex-direction: column;
        width: auto;
        margin: 0 auto;
    }
`;

export const RowCenter = styled(Row)`
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 32px;
`;

export const H2 = styled.h2`
    font-size: 28px;
`;

export const H3 = styled.h3`
    font-size: 20px;
    color: #080000;
`;

export const P = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #000000;
`;

export const Span = styled.span`
    display: inline-block;
`;

const Button = styled.button``;

export const ButtonLarge = styled(Button)``;
