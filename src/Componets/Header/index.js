import React from 'react';
import { HeaderContainer, Nav, Ul, LinkTo, Logo } from './styles';
import { Container, Row } from '../../styles/commons';
import newLogo from '../../assets/images/logo.png';



const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <Nav>
                        <Logo> <img src={newLogo} /> </Logo>

                        <Ul>
                            <li>
                                <LinkTo to="/">Home</LinkTo>
                            </li>
                            <li>
                                <LinkTo to="/about">About</LinkTo>
                            </li>
                            <li>
                                <LinkTo to="/contact">Contact</LinkTo>
                            </li>
                        </Ul>
                    </Nav>
                </Row>
            </Container>
            
        </HeaderContainer>
    );
}

export default Header;
