import React from 'react';
import { HeaderContainer, Nav, Ul, LinkTo, Logo } from './styles';
import { Container, Row } from '../../styles/commons';


const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <Nav>
                        <Logo>Logo</Logo>

                        <Ul>
                            <li>
                                <LinkTo to="/">Home</LinkTo>
                            </li>
                            <li>
                                <LinkTo to="/about">About</LinkTo>
                            </li>
                        </Ul>
                    </Nav>
                </Row>
            </Container>
            
        </HeaderContainer>
    );
}

export default Header;
