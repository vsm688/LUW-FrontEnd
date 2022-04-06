import React from "react";
import {
  StyledSideBar,
  StyledSideBarButton,
  StyledParentDiv,
  StyledLinkIcon,
  StyledAdContainer,
  StyledSettingsSVG,
  StyledSideBarButtonContainer,
  StyledLink,
  MobileContainer,
  MenuItemsContainer,
  MobileStyledSettingsSVG
} from "./SideMenu.styled";
import { useState } from "react";
import { ReactComponent as LearningObjectivesSVG } from "../../../images/Target.svg";
import { ReactComponent as InstructionsSVG } from "../../../images/InstructionsIcon.svg";
import { ReactComponent as VideoSVG } from "../../../images/VideoTutorial.svg";
import { ReactComponent as MakeProjectSVG } from "../../../images/MakeProject.svg";
import { ReactComponent as SubmitSVG } from "../../../images/Submit.svg";
import { ReactComponent as BonusChallengeSVG } from "../../../images/Medal.svg";
import { ReactComponent as TakeQuizSVG } from "../../../images/NotePad.svg";
import { ReactComponent as ProfileSVG } from "../../../images/Profile.svg";
import { ReactComponent as SettingsSVG } from "../../../images/Settings.svg";
import { ReactComponent as LogoutSVG } from "../../../images/Logout.svg";
import { ReactComponent as ProfileSVGMobile } from "../../../images/ProfileSVGMobile.svg";
import { ReactComponent as SettingsSVGMobile } from "../../../images/SettingsSVGMobile.svg";
import { ReactComponent as LogoutSVGMobile } from "../../../images/LogoutSVGMobile.svg";
import { ReactComponent as AdSVG } from "../../../images/Advertisement.svg";
import { ReactComponent as TriangleArrowSVG } from "../../../images/Triangle.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
const SideMenu = (props) => {
  const [Open, SetOpen] = useState(true);
  const handleOpenCloseState = () => {
    SetOpen(!Open);
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/student`; 
    navigate(path);
  }
  const homeChange = () =>{
    let path = "/";
    navigate(path);
  }

  
  return (
    <>
      <StyledSideBar>
        {Open && (
          <>
            <>
              <MenuItemsContainer>
                {MenuItems.map(({ text, icon, pathstring }) => (
                  <StyledParentDiv key={text}>

                    <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={{pathname:pathstring,state: {open:false} }
                }>
                      <StyledLinkIcon>{icon}</StyledLinkIcon>
                      <p>{text}</p>
                    </NavLink>
                  </StyledParentDiv>
                ))}
              </MenuItemsContainer>


              <StyledSideBarButtonContainer>
                <StyledSideBarButton
                  onClick={handleOpenCloseState}
                  isOpen={Open}
                >
                  <TriangleArrowSVG></TriangleArrowSVG>
                </StyledSideBarButton>
              </StyledSideBarButtonContainer>

              <StyledAdContainer>
                <AdSVG />
              </StyledAdContainer>

              <StyledSettingsSVG>
                <ProfileSVG onClick={() => {routeChange()}} />
                <SettingsSVG  />
                <LogoutSVG onClick ={ () => {homeChange()}} />
              </StyledSettingsSVG>
            </>

            <>
            
            </>
          </>
        )}
        {!Open && (
          <>
            <MenuItemsContainer>
              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/objectives"}>
                    <LearningObjectivesSVG
                      width={SVGwidth}
                      height={SVGHeight}
                      color={"red"}
                    ></LearningObjectivesSVG>
                    </NavLink>
              </StyledParentDiv>
              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/instructions"}>
                <InstructionsSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></InstructionsSVG>
                </NavLink>
              </StyledParentDiv>

              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/tutorial"}>
                <VideoSVG width={SVGwidth} height={SVGHeight}></VideoSVG>
                </NavLink>
              </StyledParentDiv>

              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/makeproject"}>
                <MakeProjectSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></MakeProjectSVG>
                </NavLink>
              </StyledParentDiv>
              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/submitproject"}>
                <SubmitSVG width={SVGwidth} height={SVGHeight}></SubmitSVG>
                </NavLink>
              </StyledParentDiv>

              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/bonusChallenge"}>
                <BonusChallengeSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></BonusChallengeSVG>
                </NavLink>

              </StyledParentDiv>
              
              <StyledParentDiv>
              <NavLink className={({ isActive }) => (isActive ? "active" : "noneactive")} to={"/students/TakeQuiz"}>
                <TakeQuizSVG width={SVGwidth} height={SVGHeight}></TakeQuizSVG>
                </NavLink>
              </StyledParentDiv>
            </MenuItemsContainer>
            <StyledSideBarButtonContainer>
              <StyledSideBarButton onClick={handleOpenCloseState} isOpen={Open}>
                <TriangleArrowSVG></TriangleArrowSVG>
              </StyledSideBarButton>
            </StyledSideBarButtonContainer>
            <MobileStyledSettingsSVG>
                <ProfileSVGMobile onClick={() => {routeChange()}} />
                <SettingsSVGMobile  />
                <LogoutSVGMobile onClick ={ () => {homeChange()}} />
              </MobileStyledSettingsSVG>
          </>
        )}
      </StyledSideBar>
    </>
  );
};
const SVGHeight = 33;
const SVGwidth = 33;
const MenuItems = [
  {
    text: "LEARNING OBJECTIVES",
    icon: <LearningObjectivesSVG />,
    pathstring: "/students/objectives",
  },
  {
    text: "INSTRUCTIONS",
    icon: <InstructionsSVG />,
    pathstring: "/students/instructions",
  },
  { text: "VIDEO TUTORIAL", icon: <VideoSVG />, pathstring: "/students/tutorial" },
  { text: "MAKE PROJECT", icon: <MakeProjectSVG />, pathstring: "/students/makeproject" },
  { text: "SUBMIT PROJECT", icon: <SubmitSVG />, pathstring: "/students/submitproject" },
  { text: "BONUS CHALLENGE", icon: <BonusChallengeSVG />, pathstring: "/" },
  { text: "TAKE THE QUIZ", icon: <TakeQuizSVG />, pathstring: "/" },
];

export default SideMenu;
