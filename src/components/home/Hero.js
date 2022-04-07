import React, { useState } from 'react';
import {
HeroBackground,
HeroContainer,
LeftSide,
RightSide,
HeroHeading,
HeroBody,
HeroButtons,
LearnButton,
SignButton,
Span,
} from './styles/Hero.styles';
import Modal from '../login/loginModal';
import { useNavigate } from 'react-router';


function Hero() {

    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    return (
        <HeroBackground>
            {openModal && <Modal closeModal={setOpenModal}/>}
            <HeroContainer>
                <LeftSide>
                    <HeroHeading>Prepare young minds <br />
                    for a better <Span> future.</Span></HeroHeading>
                    <HeroBody>Let us help you advance students in Digital <br />
                    Technologies and other learning areas with <br />
                    our project-based learning programme.</HeroBody>
                    <HeroButtons>
                        <LearnButton>Learn more</LearnButton>
                        <SignButton onClick={() => {
                            navigate('/login');
                        }}
                        // onClick={() => {
                        //     setOpenModal(true);
                        // }}
                        >Sign up</SignButton>
                    </HeroButtons>
                </LeftSide>
                <RightSide></RightSide>
            </HeroContainer>
        </HeroBackground>
    );
}

export default Hero;