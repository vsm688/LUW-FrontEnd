import React, { useRef } from 'react';
import {
    EnquireBackground,
    EnquireContainer,
    LeftSide,
    RightSide,
    RightInnerContainer,
    ImageDiv,
    EnquireHeader,
    EnquireBodyHeader,
    EnquireBody,
    LearnMoreButton,
    SignUpButton,
    
} from './styles/EnquireSignUp.styles';
import img from '../../images/Home/teacher-4784916_1920.png';
import { ButtonContainer } from './styles/Carousel.styles';
import { useNavigate } from 'react-router';

function EnquireSignUp() {

    const navigate = useNavigate();

    const myRef = useRef(null)

    return (
        <EnquireBackground>
            <div ref={myRef}></div>
            <EnquireContainer>
                <LeftSide>
                    <ImageDiv src={img} />
                </LeftSide>
                <RightSide>
                    <RightInnerContainer>
                        <EnquireHeader>What are you waiting for?</EnquireHeader>
                        <EnquireBodyHeader>Start teaching Digital Technologies today.</EnquireBodyHeader>
                        <EnquireBody>If you need more information, we are happy to answe any <br />
                            questions you may have.</EnquireBody>
                        <ButtonContainer>
                            <LearnMoreButton>Enquire Now</LearnMoreButton>
                            <SignUpButton onClick={() => {
                            navigate('/login');
                        }}
                        >Sign Up</SignUpButton>
                    </ButtonContainer>
                    </RightInnerContainer>
                </RightSide>
            </EnquireContainer>
        </EnquireBackground>
    );
}

export default EnquireSignUp;