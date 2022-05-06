import React from 'react'
import { StyledContentPanel } from './StyledContentPanelContainer'
import Header from '../../components/styles/Header/Header';
import { StyledFooter } from '../../components/styles/PageLayout/PageLayout.styled';
const ContentPanelContainer = ({children}) => {
  return (
    <>
      <StyledContentPanel>
         
          {children}
        
      </StyledContentPanel>
    </>
  )
}

export default ContentPanelContainer