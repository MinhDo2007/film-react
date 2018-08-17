// @flow
import React, { type Node } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export type ExtenedProps = {
  className?: string,
}

export type Props = {|
  className?: string,
  viewBox: string,
  color?: 'error' | 'inherit' | 'primary' | 'secondary' | 'disabled' | 'action',
  children: Node,
|}

const Icon = ({ color, children }: Props) => (
  <SvgIcon color={color}>{children}</SvgIcon>
)

export default Icon
