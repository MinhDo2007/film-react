import React from 'react'
import { text, selectV2, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { story } from 'utils'
import readme from './README.md'
import Button from '.'

const style = {
  color: 'red',
  backgroundColor: 'yellow'
};

story('atoms/Button', { readme })
  .add('Default', () => (
    <Button
      variant={selectV2('variant',['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab',], 'contained')}
      color={selectV2('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
      size={selectV2('size', ['small' | 'medium' | 'large'], 'small')}
      onClick={action('onClick')}
      text={text('text', 'Button')}
      disabled={boolean('disabled', false)}
      href={text('href', 'javascript:void(0)')}
    />
  ))
  .add('style Overrides', () => (
    <Button
      variant={selectV2('variant',['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab',], 'contained')}
      onClick={action('onClick')}
      style={style}
      text={text('text', 'Button')}
    />
  ))

