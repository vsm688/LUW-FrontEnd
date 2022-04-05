import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    min-height: 100vh;
    height: auto;
    justify-content: center;
    overflow: scroll;
`

export const LeftMenu = styled.div`
    height:100%;
    width:20vw;
 
    overflow:auto;
`

export const RightItems = styled.div`
    display:flex;
    height: 100%;
  
  
    overflow: auto;
    flex-direction: column;
`
export const Headercontainer = styled.div`
    display:flex;
  
    margin-left: 20vw;
    flex-direction: column;
    padding-bottom: 20px;
    h1{
        color:#6C6C6C;
        margin:5;
    }
    p{
        color:#6C6C6C;
        margin:0;
    }
`
export const MainContent = styled.div`
    display:flex;
  
    height:100%;
`
export const ProjectPanel = styled.div`
    flex-basis: calc(33.3% - 25px);
    height: auto;
    display:flex;
    justify-content: center;
    align-items: flex-start;
   
    margin-right: 20px;
    margin-bottom: 50px;
    margin-top:0;
    flex-direction: column;
    img{
        width: 100%;
        height: 150px;
    }
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:100%;
    }

`

export const ProjectsContainer = styled.div`
    display:flex;
    flex-direction: row;
    width: 60vw;
    align-content: flex-start;
    flex-wrap: wrap;
`

export const DifficultyButton = styled.button`
    display:inline-block;
    width: 100px;
    height: 20px;
    margin-bottom:10px;
    padding:0;
    border: 0;
`

export const SelectionDiv = styled.div`
    margin:0;
    *{
        margin:0
    }
`

export const Line = styled.div`
    width: 50%;
    border-top: 1px solid black;
    margin: 5px 0;
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 60vw;

`

export const BacktoTopContainer = styled.div`
    display:flex;
    width:60vw;
    justify-content: flex-end;

    margin-bottom: 50px;
`

export const BacktoTopButton = styled.button`
    width: auto;
    height: 40px;
    padding: 0 20px;
 
  
    background-color: #E5AB2C;
    margin:0;
    border: 0;
    border-radius: 10px;
    font-weight: 700;
    color: #FFFFFF;
`
export const DifficultyGroup = styled.div`
    display:flex;
`

export const DisplayPagesGroup = styled.div`
    display:flex;
    margin-right: 40px;
    align-items: flex-start;
    height:auto;
`
export const PageButton = styled.button`
    width: 30px;
    height: 20px;
    margin:0;
    display:flex;
    align-items: center;
    justify-content: center;
    border: none;
  

`