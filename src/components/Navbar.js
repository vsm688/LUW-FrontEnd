import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {
    NavbarContainer, 
    LeftContainer, 
    MiddleContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLink,
    NavbarLinkContainer,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    LogInLink,
    LanguageButton,
    LangContainer,
    LogInContainer,
} from "./styles/Navbar/Navbar.styles";
import LogoImg from '../images/Home/Star Logo 07-2.png';
import NZ from '../images/Home/NZ Flag.png';
import tinoRangatiratanga from '../images/Home/Maori flag.png';
import Modal from './login/loginModal';



function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <LeftContainer>
            <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <MiddleContainer>
            <NavbarLinkContainer>
            <NavbarLink to='/' >Home</NavbarLink>
            <NavbarLink to='/students' >Students</NavbarLink>
            <NavbarLink to='/teachers' >Teachers</NavbarLink>
            <OpenLinksButton onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}
            >
            {extendNavbar ? <> &#10005;</> : <> &#8801; </>}
            </OpenLinksButton>
            </NavbarLinkContainer>
        </MiddleContainer>
        <RightContainer>
            
            <LangContainer>LANG
                <LanguageButton src={NZ} ></LanguageButton>
                <LanguageButton src={tinoRangatiratanga} ></LanguageButton>
            </LangContainer>
            <LogInContainer>
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            <LogInLink to='/login' onClick={() => {
                            setOpenModal(true);
                        }}
                        >Register | Log In</LogInLink>
            </LogInContainer>
        </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to='/' onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}>Home</NavbarLinkExtended>
            <NavbarLinkExtended to='/features' onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}>Features</NavbarLinkExtended>
            <NavbarLinkExtended to='/teachers' onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}>Teachers</NavbarLinkExtended>
        </NavbarExtendedContainer>
        )}
         {openModal && <Modal closeModal={setOpenModal}/>}
        </NavbarContainer>
    );
}

export default Navbar;