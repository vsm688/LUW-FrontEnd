import styled from "styled-components";


export const ImgContainer = styled.img`
    width: 100px;
    height: 100px;
    padding-top: 20px;
    margin-bottom: 20px;
`

export const ProfileButton = styled.button`
    border-color: #43C0F6;
    width: 60%;
    height: auto;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    color: #43C0F6;
`

export const StudentInfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: auto;
    width: 40%;
    margin-left: 20px;
    border-radius: 20px;
    vertical-align:text-top;
`

export const StudentInfoDiv = styled.div`
    width: 90%;
    margin-bottom: 20px;
`

export const InformationContent = styled.div`
    display:flex;
    justify-content: space-between;
   

    div{
        text-align: left;
        width: 50%;
        overflow: hidden;
    }
    
`

export const StudentMainContent = styled.div`
    display:flex;
    height:calc(100vh - 50px - 10vh);
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    @media screen and (max-width: 1000px){
        height:auto;
        padding: 20px 0;
    }

  
`

export const StudentMainContentSecondary = styled.div`
    height: auto;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: flex-start;
    overflow:scroll;
    @media screen and (max-width:768px){
        justify-content: center;
        flex-direction:column;
        align-items: center;
    }
`

export const StudentPageContainer = styled.div`
    height: 100vh;
    
`

export const StudentProfileDiv = styled.div`
    width: 20%;
    height: 40%;
    background-color: white;
    margin-right: 20px;
    border-radius: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`