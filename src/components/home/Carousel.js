import React from 'react';
import {
    CarouselBackground,
    CarouselInnerContainer,
    ContainerContents,
    ContainerHeader,
    LeftContainer,
    RightContainer,
    BlueButton,
    ButtonContainer,
    ContainerSecondaryHeader,
    ButtonImage,
    ButtonContents,
    LaptopImage,
} from './styles/Carousel.styles';
import Animation from '../../images/Home/frame copy.png';
import Games from '../../images/Home/joystick copy.png';
import Chatbots from '../../images/Home/robotic copy.png';
import AugmentedReality from '../../images/Home/augmented-reality copy.png';
import img from '../../images/Home/Projects 01@2x.png';

function Carousel() {
    return (
        <CarouselBackground>
            <CarouselInnerContainer>
                <LeftContainer>
                    <ContainerHeader>What We Offer</ContainerHeader>
                    <ContainerContents>
                        The Creative Problem Solving programme is a series of <br />
                        digital creation projects aimed to encourage self- <br />
                        motivation and student agency, designed by New <br />
                        Zealands leading IT industry experts and schools.
                    </ContainerContents>
                    <ContainerSecondaryHeader>What will students create?</ContainerSecondaryHeader>
                    <ButtonContainer>
                        <BlueButton>
                            <ButtonContents>
                            <ButtonImage src= {Animation} />
                            Animation</ButtonContents>
                            </BlueButton>
                        <BlueButton>
                            <ButtonContents>
                            <ButtonImage src= {Games} />
                            Games</ButtonContents>
                            </BlueButton>
                        <BlueButton>
                            <ButtonContents>
                            <ButtonImage src= {Chatbots} />
                            Chatbots</ButtonContents>
                            </BlueButton>
                        <BlueButton>
                            <ButtonContents>
                            <ButtonImage src= {AugmentedReality}/>
                            Augmented <br />Reality</ButtonContents>
                            </BlueButton>
                    </ButtonContainer>
                </LeftContainer>
                <RightContainer>
                    <LaptopImage src={img} />
                </RightContainer>
            </CarouselInnerContainer>
        </CarouselBackground>
    );
}

export default Carousel;