import React, { Fragment } from 'react'

let appliedProps = {}
const applyHOC = (hoc, ...hocArg) => story => {
  const Component = hoc(...hocArg)((props, context) => {
    appliedProps = { ...appliedProps, ...props }
    return <Fragment>{story(appliedProps, context)}</Fragment>
  })
  const WrappedComponent = () => <Component />
  return WrappedComponent
}

export default applyHOC
