// @flow
import React from 'react'
import MaterialButton from '@material-ui/core/Button'

export type Props = {|
  onClick?: Function,
  variant:
    | 'text'
    | 'flat'
    | 'outlined'
    | 'contained'
    | 'raised'
    | 'fab'
    | 'extendedFab',
  color: 'default' | 'inherit' | 'primary' | 'secondary',
  disabled?: boolean,
  href?: string,
  size?: 'small' | 'medium' | 'large',
|} & ExternalProps

export type ExternalProps = {
  style?: Object,
  text?: string,
}

const Button = ({
  onClick,
  variant,
  color,
  style,
  disabled,
  href,
  size,
  text,
}: Props) => (
  <MaterialButton
    color={color}
    variant={variant}
    onClick={onClick}
    style={style}
    disabled={disabled}
    href={href}
    size={size}
  >
    {text}
  </MaterialButton>
)

export default Button
