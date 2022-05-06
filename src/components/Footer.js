import React from 'react';
import {
    FooterContainer,
    FooterContents,
    FooterInnerContainer,
    ContainerHeader,
    ContainerLinks,
    ContainerBody,
} from '../styles/Footer.styles';

function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <FooterContents>
                    <ContainerHeader>Company</ContainerHeader>
                    <ContainerLinks to=''>About Us</ContainerLinks>
                    <ContainerLinks to=''>Careers</ContainerLinks>
                    <ContainerLinks to=''>Partners</ContainerLinks>
                </FooterContents>
                <FooterContents>
                    <ContainerHeader>Courses</ContainerHeader>
                    <ContainerLinks to=''>Register</ContainerLinks>
                    <ContainerLinks to=''>Login</ContainerLinks>
                    <ContainerLinks to=''>Projects</ContainerLinks>
                    <ContainerLinks to=''>Teachers</ContainerLinks>
                    <ContainerLinks to=''>Parents</ContainerLinks>
                    <ContainerLinks to=''>Resources</ContainerLinks>
                </FooterContents>
                <FooterContents>
                    <ContainerHeader>Support</ContainerHeader>
                    <ContainerLinks to=''>FAQs</ContainerLinks>
                    <ContainerLinks to=''>Helpdesk</ContainerLinks>
                    <ContainerLinks to=''>Contact Us</ContainerLinks>
                </FooterContents>
                <FooterContents>
                    <ContainerHeader>Legal</ContainerHeader>
                    <ContainerLinks to=''>Terms & Conditions</ContainerLinks>
                    <ContainerLinks to=''>Privacy Policy</ContainerLinks>
                </FooterContents>
                <FooterContents>
                    <ContainerHeader>LevelUp Works</ContainerHeader>
                    <ContainerBody>
                    LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to help teachers in responses to the New Zealand Digital Technologies & Hangarau Matihiko. <br />
                    alan@levelupworks.com <br />
                    (021)668 185
                    </ContainerBody>
                </FooterContents>
            </FooterInnerContainer>
        </FooterContainer>
    );
}

export default Footer;