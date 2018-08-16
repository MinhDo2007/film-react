import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { story } from 'utils'
import readme from './README.md'
import Avatar from '.'

const StyledAvatar = styled(Avatar)`
  border-radius: 1rem;
  width: 6rem;
  height: 6rem;
`

story('atoms/Avatar', { readme })
  .add('Default', () => (
    <Avatar
      aria-label="text"
      alt="text"
      onClick={action('onClick')}
      src={text('src', 'http://placekitten.com/g/640/640')}
      role={text('role', 'button')}
    />
  ))
  .add('styled(Avatar)', () => (
    <StyledAvatar
      aria-label="text"
      alt="text"
      onClick={action('onClick')}
      src={text('src', 'http://placekitten.com/g/640/640')}
      role={text('role', 'button')}
    />
  ))
