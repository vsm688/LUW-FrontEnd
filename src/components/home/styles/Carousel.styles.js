import styled from 'styled-components';
import img from '../../../images/Home/Projects 01.png';

export const CarouselBackground = styled.div`
    background-color: white;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
`;

export const CarouselInnerContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
`;

export const LeftContainer = styled.div`
    flex: 50%;
    padding-left: 10%;
`;

export const RightContainer = styled.div`
    flex: 50%;
    padding-right: 5%;
`;

export const ContainerHeader = styled.h1`
    font-family: Nunito;
    color: #707070;
`;

export const ContainerContents = styled.p`
    font-family: Open sans;
    color: #707070;;
`;
export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const BlueButton = styled.div`
    background: radial-gradient(#B2E4FA, #43C0F6);
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border-width: 2px;;
    border: red;
    font-family: open sans;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const ButtonContents = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerSecondaryHeader = styled.h2`
    font-family: Nunito;
    color: #707070;
    padding-top: 15px;
`;

export const ButtonImage = styled.img`
    width: 50px;
    height: auto;
`;

export const LaptopImage = styled.img`
    display: flex;
    width: 500px;
    height: auto;
`;