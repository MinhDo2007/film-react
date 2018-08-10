import React, { Fragment } from 'react'
import styled from 'styled-components'

const SpacedDiv = styled.div`
  padding-top: 6rem;
`

/* prettier-ignore */
const withGlobalConfig = () => (story, context) => (
  <Fragment>
    <SpacedDiv>
      {story(context)}
    </SpacedDiv>
  </Fragment>
)

export default withGlobalConfig
