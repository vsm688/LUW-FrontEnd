import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    width: 100%;
    min-height: 400px;
    background-color: #B2E4FA;
    display: flex;
    flex-direction: column;
`;

export const FooterInnerContainer = styled.div`
    width: 80%;
    height: 400px;
    display: flex;
    /* position: relative; */
    padding-left: 10%;
    /* padding-right: 10px; */
`;

export const FooterContents = styled.div`
    flex: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 80px;
    /* justify-content: center; */
    /* width: 50%; */
`;

export const ContainerHeader = styled.h1`
    font-family: Nunito;
    text-transform: uppercase;
    font-size: 1rem;
    color: #707070;
`;

export const ContainerLinks = styled(Link)`
    font-family: open sans;
    text-decoration: none;
    color: #707070;
    font-size: 12px;
    padding: 4px;
`;

export const ContainerBody = styled.p`
    font-family: open sans;
    text-decoration: none;
    color: #707070;
    font-size: 12px;
`;