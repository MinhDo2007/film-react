# `<Icon />`

use SVG for icon (https://material.io/tools/icons/?style=baseline)
If you want to add new Icon - You must create a new Icon Component and add it to index.stories.js
You can find path d = "..." flow this the way:
- choose Icon from https://material.io/tools/icons/?style=baseline
- find node_modules folder in this project
- find @material-ui folder
- ctrl + shift + H to find all in @material-ui
- input: 'Delete' 
- enter -> you will find path d

## Usage

```js
example:

import DeleteIcon from 'components/atoms/Icon/DeleteIcon'
```

### Default Usage

```jsx
<DeleteIcon
  color={'error'}
/>
```

<!-- STORY -->

## Props

|  propName  | propType | defaultValue      | isRequired | description           |
| :--------: | :------: | :---------------: | :--------: | ----------------------|
| color      |  string  |      -            |     -      | color button          |
| icon       |  string  |      -            |     +      | text button           |
