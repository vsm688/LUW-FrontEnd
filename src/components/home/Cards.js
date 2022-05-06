import React from 'react';
import {
    CardsBackground,
    CardsBodyContainer,
    CardsHeader,
    CardsContainer,
    CreativeImage,
    CriticalImage,
    CommunicationImage,
    TechnologyImage,
    CardsInnerContainer,
    CardsInnerLogo,
    ButtonsHeader,
    ButtonsContainer,
    LearnMoreButton,
} from './styles/Cards.styled.js';
import idea from '../../images/Home/idea copy.png';
import brain from '../../images/Home/brain copy.png';
import team from '../../images/Home/team copy.png';
import atom from '../../images/Home/atom copy.png';

function Cards() {
    return (
        <CardsBackground>
            <CardsHeader>Teaching kids programming and digital skills is MORE than just writing code.</CardsHeader>
            <CardsBodyContainer>
                <CardsContainer>
                    <CreativeImage>
                        <CardsInnerContainer>
                            <CardsInnerLogo src={idea} /> Creativity & Individuality
                        </CardsInnerContainer>
                    </CreativeImage>
                    <CriticalImage>
                        <CardsInnerContainer>
                            <CardsInnerLogo src={brain} /> Critical Thinking & Problem Solving
                        </CardsInnerContainer>
                    </CriticalImage>
                    <CommunicationImage>
                        <CardsInnerContainer>
                            <CardsInnerLogo src={team} /> Communication & Collaboration
                        </CardsInnerContainer>
                    </CommunicationImage>
                    <TechnologyImage>
                        <CardsInnerContainer>
                            <CardsInnerLogo src={atom} /> Technology & Future Focus
                        </CardsInnerContainer>
                    </TechnologyImage>
                </CardsContainer>
            </CardsBodyContainer>
            <ButtonsHeader>How our programme helps teachers and schools</ButtonsHeader>
            <ButtonsContainer>
               <LearnMoreButton>Learning pathways</LearnMoreButton>
               <LearnMoreButton>Digital technologies</LearnMoreButton>
               <LearnMoreButton>Key competencies</LearnMoreButton>
               <LearnMoreButton>Ir4.0</LearnMoreButton>
            </ButtonsContainer>
        </CardsBackground>
    );
}

export default Cards;