// @flow
import React, { type Node } from 'react'
import MaterialPopover from '@material-ui/core/Popover'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

export type Props = {|
  onClick?: Function,
  anchorEl?: Object | Function,
  anchorOrigin?: {
    horizontal: 'left' | 'center' | 'right' | number,
    vertical: 'top' | 'center' | 'bottom' | number,
  },
  transformOrigin?: {
    horizontal: 'left' | 'center' | 'right' | number,
    vertical: 'top' | 'center' | 'bottom' | number,
  },
  children?: string,
  setOpen: Function,
  open: boolean,
  eventType: 'click' | 'mouseEnter' | 'none',
|} & ExternalProp

export type ExternalProp = {|
  targetComponent: Node,
|}

const PopoverContainer = styled.div`
  display: block;
`
const Text = styled.div`
  margin: 16px;
  font-size: 8.75px;
  font-weight: 400;
`

const TargetComponentStyle = styled.div`
  display: inline-block;
`

const enhance = compose(withState('anchorEl', 'setOpen', null))
const popoverHandlers = (e, setOpen) => setOpen(e.currentTarget)

const Popover = ({
  onClick,
  anchorEl,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
  },
  children,
  setOpen,
  targetComponent,
  eventType = 'click',
}: Props) => (
  <PopoverContainer>
    <TargetComponentStyle
      onClick={e => {
        eventType === 'click' ? popoverHandlers(e, setOpen) : false
      }}
      onMouseEnter={e => {
        eventType === 'mouseEnter' ? popoverHandlers(e, setOpen) : false
      }}
      onMouseLeave={() => {
        eventType === 'mouseEnter' ? setOpen(null) : false
      }}
    >
      {targetComponent}
    </TargetComponentStyle>
    <MaterialPopover
      style={{ pointerEvents: eventType === 'mouseEnter' ? 'none' : '' }}
      onClick={onClick}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      onClose={() => setOpen(null)}
    >
      <Text>{children}</Text>
    </MaterialPopover>
  </PopoverContainer>
)

export default enhance(Popover)
