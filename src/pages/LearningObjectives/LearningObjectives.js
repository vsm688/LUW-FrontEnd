import React from "react";
import ContentPanelContainer from "../ContentPanelContainer/ContentPanelContainer";
import {
  StyledHeaderDiv,
  StyledBlockDivContainer,
  StyledBlockDiv,
  StyledLeftBlockDiv,
  ChildBlockDiv,
  BlockChildContainer,
  BlockParent,
} from "./LearningObjectives.styled";

import PurpleBlock from "../../images/purpleblock.png";
import PurpleBlockChild from "../../images/purpleblockchild.png";
import PurpleBlockChild2 from "../../images/PurpleChild2.png";
import BlueBlock from "../../images/BlueBlock.png";
import BlueChild from "../../images/BlueChild.png";
import OrangeBlock from "../../images/OrangeBlock.png";
import OrangeChild from "../../images/OrangeChild.png";
import SideMenu from "../../components/styles/SideMenu/SideMenu";
import Header from '../../components/styles/Header/Header';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import { StyledMain } from "../../components/styles/PageLayout/PageLayout.styled";
import { StyledFooter, StyledFooterText } from "../../components/styles/PageLayout/PageLayout.styled";
import { useState } from "react";
import { useEffect } from "react";
import {useLocation} from 'react-router-dom'
const LearningObjectives = (props) => {

  const [InstructionsComponents, setInstructionsComponents] = useState(null);
  const [loading, setLoading] = useState(true)
 

  // async function fetchInstructionsContent() {
  //   const response = fetch("http://localhost:5000/instructions")
  //     .then((response) => response.text())
  //     .then((data) => {
  //         setInstructionsComponents(data)
  //     })
  //     .finally(() => {
  //       setLoading(!loading);
  //     })
  // }

  // useEffect(() => {
  //   const response = fetchInstructionsContent();

  // }, []);
  // We know if loading hasn't completed that the studentInfo state hasn't been updated. Therefore we display loading on the screen. Else we have access
  // to all the fields and thus can load the data.
  
  return (

    <>
      <Header></Header>
      <PageLayout>

        <SideMenu></SideMenu>
        <StyledMain>
          <ContentPanelContainer>
            <StyledHeaderDiv>
              <h1>Explore Scratch blocks</h1>
              <p>
                Learn the basic function of some basic scratch block as as "say",
                "wait", "go to" and "hide."
              </p>
            </StyledHeaderDiv>
            
        
            <div id="main">
              <div id="contDiv">
                <div id="contDivChild">
                  <p>Look Blocks</p>
                  <div id="imgHolder">
                    <img src={PurpleBlock} height= {"100%"} width={"50%"}></img>
                    <img src={PurpleBlockChild} height ={"20%"}width={"50%"}></img>
              
               
                  </div>
                </div>
              </div>
              <div id="contDiv">
                <div id="contDivChild">
                  <p>Controls Blocks</p>
                  <div id="imgHolder">
                    <img src={OrangeBlock} height= {"100%"} width={"50%"}></img>
                    <img src={OrangeChild} height ={"20%"}width={"30%"}></img>
                  </div>
                </div>
                
              </div>
              <div id="contDiv">
                <div id="contDivChild">
                  <p>Motion Blocks</p>
                  <div id="imgHolder">
                    <img src={BlueBlock}  height= {"100%"} width={"50%"}></img>
                    <img src={BlueChild} height ={"20%"}width={"30%"}></img>
                  </div>
                </div>
                
              </div>
          
            </div>
          </ContentPanelContainer>
        </StyledMain>
      </PageLayout>
      <StyledFooter><StyledFooterText><p>&copy; LevelupWorks 2020</p></StyledFooterText></StyledFooter>
    </>
  );
};

export default LearningObjectives;
