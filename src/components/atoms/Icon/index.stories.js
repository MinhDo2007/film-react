import React from 'react'
import { selectV2 } from '@storybook/addon-knobs'
import { story } from 'utils'
import styled from 'styled-components'
import readme from './README.md'
import CloseIcon from './CloseIcon'
import DeleteIcon from './DeleteIcon'
import MovieIcon from './MovieIcon'
import SearchIcon from './SearchIcon'
import EditIcon from './EditIcon'
import StarIcon from './StarIcon'
import DownloadIcon from './DownloadIcon'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 25%;
  margin-bottom: 3.6rem;
  text-align: center;
`

const ItemTitle = styled.h4`
  margin-bottom: 1.2rem;
  font-size: 1.6rem;
  font-weight: normal;
`

const renderIcon = RenderIcon => (
  <Item>
    <ItemTitle>
      &lt;
      {RenderIcon.name} /&gt;
    </ItemTitle>
    <div style={{ marginBottom: '2rem' }}>
      <RenderIcon
        color={selectV2(
          'color',
          ['error', 'inherit', 'primary', 'secondary', 'disabled', 'action'],
          'inherit'
        )}
      />
    </div>
  </Item>
)

story('atoms/Icon', { readme }).add('Default', () => (
  <Wrapper>
    {renderIcon(CloseIcon)}
    {renderIcon(DeleteIcon)}
    {renderIcon(MovieIcon)}
    {renderIcon(SearchIcon)}
    {renderIcon(EditIcon)}
    {renderIcon(StarIcon)}
    {renderIcon(DownloadIcon)}
  </Wrapper>
))
