import React from 'react'
import SideMenu from "../../components/styles/SideMenu/SideMenu";
import ContentPanelContainer from "../ContentPanelContainer/ContentPanelContainer";
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import Header from '../../components/styles/Header/Header';


import { StyledFooter,StyledFooterText } from '../../components/styles/PageLayout/PageLayout.styled';
const Instructions = () => {
  return (
    <>
      <Header></Header>
      <PageLayout>
        <SideMenu></SideMenu>
        <StyledMain>
          <ContentPanelContainer>
      {/* Main div contains image and link to scratch page */}
            <div id="makeProjectContent">

              <div id="InnerTextDiv">

                <div id="textDiv" >
                  <div className="CenterDivText">
                    <h1>Test</h1>
                    <p>If you haven't used Scratch before, you will need to join Scratch first. </p>
                    <p>Go to <a style = {{textDecoration:"none"}} href='https://scratch.mit.edu' >https://scratch.mit.edu.</a> Click on <span style={{color:"#F91C85"}}>Join Scratch.</span></p>
                  </div>
                </div>
                <div id="ProjectBanner" >
                  <button className="LeftButton"><img src={"/images/Projects/instructions/left.png"}></img></button>
                  <img width={"50%"} src={"/images/Projects/Instructions/InstructionsBanner.png"}></img>
                  <button className="RightButton"><img src={"/images/Projects/instructions/right.png"}></img></button>
                </div>
                <div id="BottomText">
                  <div className="CenterDivText">
                  <p>
                  Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don't have an email address, or if you are not sure what to do.
                  </p>
                  </div>
                </div>
              </div>

            </div>


          </ContentPanelContainer>
        </StyledMain>
      </PageLayout >
      <StyledFooter><StyledFooterText><p>&copy; LevelupWorks 2020</p></StyledFooterText></StyledFooter>
    </>
  )
}

export default Instructions;