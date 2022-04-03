import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? '100vh' : '50px')};
    background-color: #43C0F6;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 700px) {
        height: 50px; 
    }
    `;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`;

export const LeftContainer = styled.div`
    flex: 20%;
    display: flex;
    align-items: center;
    padding-left: 7%;
`;

export const MiddleContainer = styled.div`
    flex: 60%;
    display: flex;
    justify-content: center;
`;

export const RightContainer = styled.div`
    flex: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 5%;
`;

export const LangContainer = styled.div`
    display: flex;
    color: white;
    font-size: .8rem;
    align-items: center;
    position: relative;
    left: 30px;
    top: 3px;
`;

export const LogInContainer = styled.div`
    color: white;
    padding-top: 7px;
    white-space: nowrap;
`;


export const NavbarLinkContainer = styled.div`
    display: flex;
    
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    text-transform: uppercase;
    margin: 20px;
    padding-top: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const LogInLink = styled.button`
    border: none;
    background-color: #43C0F6;
    white-space: nowrap;
    color: white;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0px;
`;

export const LanguageButton = styled.img`
    margin: 5px;
    max-width: 50px;
    height: auto;
    cursor: pointer;
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    text-transform: uppercase;
    margin: 15px;
`;

export const Logo = styled.img`
    margin: 5px;
    max-width: 140px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 50px;
    padding-left: 30px;
    cursor: pointer;

    @media (min-width:700px) {
        display:none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;
