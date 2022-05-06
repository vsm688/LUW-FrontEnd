import styled from 'styled-components';
import img from '../../../images/Home/Hero.png';

export const HeroBackground = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    /* background-color: whitesmoke; */
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
`;

export const LeftSide = styled.div`
    flex: 50%;
    padding-left: 10%;
    padding-top: 20px;
`;

export const RightSide = styled.div`
    flex: 50%;
`;

export const HeroHeading = styled.h1`
    color: #707070;
    font-family: Nunito;

`;

export const Span = styled.span`
    color: #43C0F6;
`;

export const HeroBody = styled.p`
    color: #707070;
    font-family: open sans;
`;

export const HeroButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    justify-content: left;
    padding-left: 20px;
`;

export const LearnButton = styled.button`
    padding: 9px 30px;
    margin: 0px 28px;
    font-size: 9px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: white;
    color: #707070;
    border-color: #43C0F6;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const SignButton = styled.button`
    padding: 9px 40px;
    margin: 0px 28px;
    font-size: 9px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #F91C85;
    border-radius: 8px;
    border-width: 2px;
    color: white;
    border-color: hotpink;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;
