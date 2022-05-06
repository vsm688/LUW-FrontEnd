import React from 'react'
import { StyledLayout, StyledFooter } from './PageLayout.styled'
import Header from '../Header/Header'
const PageLayout = ({children}) => {
  return (
    <StyledLayout>
          {children}
    </StyledLayout>
  )
}

export default PageLayout