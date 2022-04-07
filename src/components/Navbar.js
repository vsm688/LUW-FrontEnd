import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useContext } from 'react';
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
    StudentImgContainer,
    ProfileButton,
    ProfileExtendedContainer,
    ProfileLinkExtended,
    UserContainer,
} from "./styles/Navbar/Navbar.styles";
import LogoImg from '../images/Home/Star Logo 07-2.png';
import NZ from '../images/Home/NZ Flag.png';
import tinoRangatiratanga from '../images/Home/Maori flag.png';
import Modal from './login/loginModal';

import { LoginContext } from '../Helper/Context';



function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false);
    const [extendProfile, setExtendProfile] = useState(false);
    // const [openModal, setOpenModal] = useState(false);

    // const [loggedIn, setLoggedIn] = useState(false);

    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    const [loginStatus, setLoginStatus] = useState('');

    const [studentInfo, setStudentInfo] = useState({});
    const [loading, setLoading] = useState(true)
    const [studentID, setStudentID] = useState(1);

    async function fetchStudent() {
        const response = fetch(`http://localhost:5000/student/${studentID}`)
          .then((response) => response.json())
          .then((data) => {
    
            setStudentInfo(data)
            setStudentID(data.StudentID);
          })
          .finally(() => {
            setLoading(false);
          })
          .catch(error => {
            setLoading(true);
          })
    }

    useEffect(() => {
        const response = fetchStudent();
    
    }, []);
    



    return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <LeftContainer>
            <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <MiddleContainer>
            <NavbarLinkContainer>
            <NavbarLink to='/' >Home</NavbarLink>
            <NavbarLink to='/features' >Features</NavbarLink>
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
            {loggedIn ? (
                <UserContainer>
              <img src={"/images/" + studentInfo.StudentID +".png"} style={{ width: "25px" }}></img>
                    <ProfileButton onClick={() => {
                setExtendProfile((curr) => !curr);
            }}>
                    {studentInfo.Name}
                    </ProfileButton>
                </UserContainer>
            
            ) : (
                <LogInContainer>
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            <LogInLink to='/login' 
                        >Register | Log In</LogInLink>
            </LogInContainer> 
            )}

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
        {extendProfile && (
        <ProfileExtendedContainer>
            <ProfileLinkExtended to='/student' onClick={() => {
                setExtendProfile((curr) => !curr);
            }}>My Profile</ProfileLinkExtended>
            <ProfileLinkExtended to='/settings' onClick={() => {
                setExtendProfile((curr) => !curr);
            }}>Settings</ProfileLinkExtended>
            <ProfileLinkExtended to='/teachers' onClick={() => {
                setExtendProfile((curr) => !curr);
            }}>Log Out</ProfileLinkExtended>
        </ProfileExtendedContainer>
        )}
         {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        </NavbarContainer>
    );
}

export default Navbar;