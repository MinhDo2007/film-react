// @flow
import React from 'react'
import styled from 'styled-components'
import { pure } from 'recompose'

export type Props = {|
  className?: string,
  'aria-label': string,
  src: string,
  role: string,
  onClick?: Function,
|}

const AvatarContainer = styled.div`
  display: inline-block;
`

const AvatarImg = styled.img`
  border: 0.1rem solid ${('red', 400)};
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`

const Avatar = ({
  className,
  src = 'http://placekitten.com/g/640/640',
  role = 'button',
  'aria-label': ariaLabel,
  onClick,
}: Props) => (
  <AvatarContainer>
    <AvatarImg
      className={className}
      src={src}
      role={role}
      aria-label={ariaLabel}
      onClick={onClick}
    />
  </AvatarContainer>
)

export default pure(Avatar)
