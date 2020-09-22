import styled from 'styled-components';
import { Grey, White } from '../../styles/colors';
import { Link } from 'react-router-dom';
import { H1 } from '../../styles/commons';

export const HeaderContainer = styled.section`
    max-height: 100px;
    display: flex;
    flex-direction: row;
    background-color: ${Grey};
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    color: ${White};
    width: 1120px;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    li {
        list-style-type: none;
    }
`;

export const LinkTo = styled(Link)`
    color: ${White};
    text-decoration: none;
    padding: 0 20px;
`;

export const Logo = styled(H1)`
    margin: -27px;
`;




