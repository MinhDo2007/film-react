import React, { Fragment } from 'react'
import { text, selectV2 } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { story } from 'utils'
import IconButton from 'components/molecules/IconButton'
import DeleteIcon from 'components/atoms/Icon/DeleteIcon'
import readme from './README.md'
import Popover from '.'
import Button from '../Button'

story('atoms/Popover', { readme }).add('Default', () => (
  <Fragment>
    <Popover
      open
      onClick={action('onClick')}
      anchorOrigin={{
        vertical: selectV2(
          'vertical AO',
          ['top', 'center', 'bottom'],
          'bottom'
        ),
        horizontal: selectV2(
          'horizontal AO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      transformOrigin={{
        vertical: selectV2('vertical TO', ['top', 'center', 'bottom'], 'top'),
        horizontal: selectV2(
          'horizontal TO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      eventType="click"
      targetComponent={<Button text={text('Button', 'Button')} />}
    >
      {text('Content Text', 'Content Text')}
    </Popover>
    <Popover
      open
      onClick={action('onClick')}
      anchorOrigin={{
        vertical: selectV2(
          'vertical AO',
          ['top', 'center', 'bottom'],
          'bottom'
        ),
        horizontal: selectV2(
          'horizontal AO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      transformOrigin={{
        vertical: selectV2('vertical TO', ['top', 'center', 'bottom'], 'top'),
        horizontal: selectV2(
          'horizontal TO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      eventType="click"
      targetComponent={<IconButton icon={<DeleteIcon />} />}
    >
      {text('Content Text', 'Content Text')}
    </Popover>
    <Popover
      open
      onClick={action('onClick')}
      anchorOrigin={{
        vertical: selectV2(
          'vertical AO',
          ['top', 'center', 'bottom'],
          'bottom'
        ),
        horizontal: selectV2(
          'horizontal AO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      transformOrigin={{
        vertical: selectV2('vertical TO', ['top', 'center', 'bottom'], 'top'),
        horizontal: selectV2(
          'horizontal TO',
          ['left', 'center', 'right'],
          'center'
        ),
      }}
      eventType="mouseEnter"
      targetComponent="Text"
    >
      {text('Content Text', 'Content Text')}
    </Popover>
  </Fragment>
))
