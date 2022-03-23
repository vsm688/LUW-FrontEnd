import styled from "styled-components";


export const StyledContentPanel = styled.div`
    display:flex;
    flex-direction: column ;
    align-items:center ;
    width: 95%;
    height: 95%;
    border-radius: 20px;
    background-color: #d4f2ff;
    overflow: scroll;
    p{
        color: #707070;
    }
    h1{
        color: #707070;
    }
    @media (max-width:1000px){
        overflow: scroll;
    }
`