# `<Avatar />`

## Usage

```js
import Avatar from 'components/atoms/Avatar'
```

### Default Usage

```jsx
<Avatar aria-label="avatar" />
```

### Different Avatar

```jsx
<Avatar aria-label="avatar" src="http://placekitten.com/g/640/640" />
```

### Style Overrides

```jsx
import styled from 'styled-components'

const StyledAvatar = styled(Avatar)`
  border-radius: 1rem;
  width: 6rem;
  height: 6rem;
`

<StyledAvatar aria-label="avatar" />
```

<!-- STORY -->

## Props

|  propName  | propType | defaultValue | isRequired | description                                      |
| :--------: | :------: | :----------: | :--------: | ------------------------------------------------ |
| className  |  string  |      -       |     -      | class name                                       |
| aria-label |  string  |      -       |     +      | ARIA label                                       |
|    src     |  string  |     `2`      |     +      | Avatar image src                                 |
|  onClick   | Function |      -       |     -      | Callback function when user clicks on the Avatar |
|    role    |  string  |   `button`   |     +      | ARIA role of the Button                          |
