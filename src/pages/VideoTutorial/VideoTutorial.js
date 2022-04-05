
import React from 'react'
import SideMenu from '../../components/styles/SideMenu/SideMenu';
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import Header from '../../components/styles/Header/Header';
import { StyledFooter,StyledFooterText } from '../../components/styles/PageLayout/PageLayout.styled';
const VideoTutorial = () => {
  return (
    <>
    <Header></Header>
      <PageLayout>
        <SideMenu></SideMenu>
        <StyledMain>
          <ContentPanelContainer>
            <div id="VideoAligner">
            <div id="VideoContainer">
                <button className="LeftButton">Left</button>
                <img src={"/images/Projects/VideoTutorial/VideoTutorial.png"}></img>
                <button className="RightButton">Right</button>
            </div>
            </div>
          </ContentPanelContainer>
        </StyledMain>
      </PageLayout >
      <StyledFooter><StyledFooterText><p>&copy; LevelupWorks 2020</p></StyledFooterText></StyledFooter>
    </>
  )
}

export default VideoTutorial