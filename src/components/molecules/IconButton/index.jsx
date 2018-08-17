// @flow
import React from 'react'
import MaterialIconButton from '@material-ui/core/IconButton'

export type Props = {|
  onClick?: Function,
  color: 'default' | 'inherit' | 'primary' | 'secondary',
  disabled?: boolean,
  icon?: Node,
|}

const IconButton = ({ onClick, color, disabled, icon }: Props) => (
  <MaterialIconButton onClick={onClick} disabled={disabled} color={color}>
    {icon}
  </MaterialIconButton>
)

export default IconButton
