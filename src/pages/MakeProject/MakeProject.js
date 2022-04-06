import React from 'react';
import SideMenu from '../../components/styles/SideMenu/SideMenu';
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import Header from '../../components/styles/Header/Header';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import { StyledFooter,StyledFooterText } from '../../components/styles/PageLayout/PageLayout.styled';
const MakeProject = () => {
  return (
    <>
      <Header></Header>
      <PageLayout>
        <SideMenu></SideMenu>
        <StyledMain>
          <ContentPanelContainer>


          </ContentPanelContainer>
        </StyledMain>
      </PageLayout >
      <StyledFooter><StyledFooterText><p>&copy; LevelupWorks 2020</p></StyledFooterText></StyledFooter>
    </>
  )
}

export default MakeProject