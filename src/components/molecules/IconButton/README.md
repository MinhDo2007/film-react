# `<IconButton />`

## Usage

```js
import IconButton from 'components/molecules/IconButton'
```

### Default Usage

```js
import DeleteIcon from 'components/atoms/Icon/DeleteIcon'
```

```jsx
<IconButton
  color={'default'}
  onClick={'onClick'}
  icon={<DeleteIcon />}
  disabled={false}
/>
```

<!-- STORY -->

## Props

|  propName  | propType | defaultValue | isRequired | description                                    |
| :--------: | :------: | :----------: | :--------: | -----------------------------------------------|
| color      |  string  |      -       |     -      | color icon                                     |
| onClick    | Function |      -       |     -      | Callback function when user clicks on the icon |
| icon       |  string  |      -       |     -      | icon                                           |
| disabled   | boolean  |      false   |     -      | status icon                                    |
