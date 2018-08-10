import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withDocs } from 'storybook-readme'
import styled from 'styled-components'
import withGlobalConfig from './withGlobalConfig'

const defaultOptions = {
  readme: '',
  readmePreviewHeight: 'auto',
  a11y: true,
}

const story = (
  title,
  {
    readme,
    readmePreviewHeight = 'auto',
    a11y = true,
  } = defaultOptions
) => {
  const s = storiesOf(title, module)

  if (a11y) s.addDecorator(checkA11y)
  s.addDecorator(withGlobalConfig())
  if (readme) {
    const withDocsCustomPreview = withDocs({
      PreviewComponent: styled.div`
        border: 0.1rem #b3d4fc dashed;
        padding: 0 2rem 6rem 2rem;
        margin: 2rem 0;
        position: relative;
        border-radius: 0.4rem;
        min-height: ${readmePreviewHeight};

        &::before {
          content: 'preview';
          position: absolute;
          left: -0.1rem;
          top: -0.1rem;
          color: #428bca;
          background-color: #b3d4fc;
          font-size: 1.1rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          padding: 0.3rem 0.5rem;
          border-radius: 0.4rem 0;
        }
      `,
    })
    s.addDecorator(withDocsCustomPreview(readme))
  }

  return s
}

export default story
