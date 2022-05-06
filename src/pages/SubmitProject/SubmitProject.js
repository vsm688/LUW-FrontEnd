import React from 'react'
import SideMenu from '../../components/styles/SideMenu/SideMenu';
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import Header from '../../components/styles/Header/Header';
import { StyledFooter } from '../../components/styles/PageLayout/PageLayout.styled';
const SubmitProject = () => {
  return (
    <>
    <PageLayout>
      <SideMenu></SideMenu>
      <StyledMain>
        <ContentPanelContainer>
          <div>LearningObjectives</div>
        </ContentPanelContainer>
      </StyledMain>
    </PageLayout >
    </>
  )
}

export default SubmitProject