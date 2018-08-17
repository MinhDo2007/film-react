import React from 'react'
import { selectV2, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { story } from 'utils'
import DeleteIcon from 'components/atoms/Icon/DeleteIcon'
import readme from './README.md'
import IconButton from '.'

story('atoms/IconButton', { readme }).add('Default', () => (
  <IconButton
    color={selectV2(
      'color',
      ['default', 'inherit', 'primary', 'secondary'],
      'default'
    )}
    onClick={action('onClick')}
    disabled={boolean('disabled', false)}
    icon={<DeleteIcon />}
  />
))
