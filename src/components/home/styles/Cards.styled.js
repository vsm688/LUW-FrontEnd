import styled from 'styled-components';
import Creativity from '../../../images/Home/girl-in-white-long-sleeve-dress-sitting-on-brown-wooden-3913426.png';
import Critical from '../../../images/Home/markus-spiske-AoX_1zm1NOM-unsplash.png';
import Communication from '../../../images/Home/girl-in-red-dress-playing-a-wooden-blocks-3662667.png';
import Technology from '../../../images/Home/annie-spratt-xKJUnFwfz3s-unsplash.png';

export const CardsBackground = styled.div`
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const CardsHeader = styled.h1`
 color: #707070;
 font-family: Nunito;
 font-size: 1rem;
 display: flex;
 justify-content: center;
 padding-top: 30px;
`;

export const CardsBodyContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
   justify-content: center;
   padding-top: 20px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CreativeImage = styled.div`
    background-image: url(${Creativity});
    background-size: cover;
    background-repeat: no-repeat;
    width: 220px;
    height: 130px;
    border-radius: 8px;
    border-width: 2px;;
    border: red;
    font-family: open sans;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const CriticalImage = styled.div`
    background-image: url(${Critical});
    background-size: cover;
    background-repeat: no-repeat;
    width: 220px;
    height: 130px;
    border-radius: 8px;
    border-width: 2px;;
    border: red;
    font-family: open sans;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const CommunicationImage = styled.div`
    background-image: url(${Communication});
    background-size: cover;
    background-repeat: no-repeat;
    width: 220px;
    height: 130px;
    border-radius: 8px;
    border-width: 2px;;
    border: red;
    font-family: open sans;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const TechnologyImage = styled.div`
    background-image: url(${Technology});
    background-size: cover;
    background-repeat: no-repeat;
    width: 220px;
    height: 130px;
    border-radius: 8px;
    border-width: 2px;;
    border: red;
    font-family: open sans;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const CardsInnerContainer = styled.div`
    width: 220px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardsInnerLogo = styled.img`
    width: 50px;
    height: auto;
    padding: 5px;
    font-size: 14px;
`;

export const CardsInnerText = styled.p`
    color: white;
    font-size: 14px;
`;

export const ButtonsHeader = styled.h1`
 color: #707070;
 font-family: Nunito;
 font-size: 1.2rem;
 display: flex;
 justify-content: center;
 /* padding-top: 30px; */
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const LearnMoreButton = styled.button`
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