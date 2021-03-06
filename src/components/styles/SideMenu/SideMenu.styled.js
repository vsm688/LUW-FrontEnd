import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column ;
    position: relative;
    width: auto;
    background-color: #43C0F6;

    overflow: auto;
    justify-content:  ${({ isOpen }) => (isOpen ? 'space-between' : '')} ;
    p{
        margin: 0;
        font-size: 10px ;
        color: white;
        font-weight: 900;
        
    }   
    @media (max-width:768px){
        overflow:visible;
    }
  
    

 
`

export const StyledSideBarButtonContainer = styled.div`
    display:flex;
    
    width: 100%;
    min-height: 50px;

    @media (max-width:768px){
        display:none;
    }


        
`


export const StyledSideBarButton = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B2E4FA ;
    min-height: 50px;
    width: 40px;
    cursor: pointer;
    transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `rotate(0)`)};
    border-top-right-radius: ${({ isOpen }) => (isOpen ? '10px' : '10px')};
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '10px' : '10px')};
    left: ${({ isOpen }) => (!isOpen ? '0' : '')};
    

`

export const StyledMenuContainer = styled.div`
    display:flex;
    justify-content: flex-start ;
`

export const StyledParentDiv = styled.div`
    display:flex;
    padding: 15px;
    padding: 15px 0;
    align-items: center ;
 
.noneactive {
    padding: 10px 15px;
  list-style: none ;
    display: flex;
    align-items: center;
    text-decoration: none;
  
}


.active {
    p{
    color:#707070;
    }
    padding: 10px 15px;
    background: #B2E4FA;
    list-style: none ;
    display: flex;
    align-items: center;
    text-decoration: none;
    width:100%;
    box-sizing: border-box;
  
}

`

export const StyledLinkIcon = styled.div`
    display:flex;
    margin-right: 5px;
`

export const StyledAdContainer = styled.div`
    display:flex;
    padding: 10px;
    @media (max-width:768px){
        display:none;
    }
`

export const StyledSettingsSVG = styled.div`
    padding: 10px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly ;

    @media (max-width:768px) {
        display:none;
    }
`
export const MobileStyledSettingsSVG = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
`

export const StyledLink = styled(NavLink)`
    list-style: none ;
    display: flex;
    align-items: center;
    text-decoration: none;
  
   
`

export const MobileContainer = styled.div`
    display:none;
    @media (max-width: 768px) {
        display:flex;
        flex-direction: row;
        height: 100%;
        overflow: visible;
        justify-content: center;
    }
    
`
export const MenuItemsContainer = styled.div`
    @media (max-width:768px){
        display:none;
    }

`