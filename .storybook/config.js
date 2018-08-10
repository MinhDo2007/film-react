import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/react'

setOptions({
  name: 'Film React',
  url: 'https://github.com/MinhDo2007/film-react',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
})

addDecorator(withKnobs)

function loadStories() {
  const req = require.context('../src/components/', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
