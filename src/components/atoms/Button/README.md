# `<Button />`

## Usage

```js
import Button from 'components/atoms/Button'
```

### Default Usage

```jsx
<Button
  variant={container}
  color={'default'}
  size={'small'}
  onClick={'onClick'}
  text={'Button'}
  disabled={false}
  href={'javascript:void(0)'}
/>
```

### Style Overrides

```jsx

const style = {
  color: 'red',
  backgroundColor: 'yellow',
  ....
};

<Button
  variant={container}
  color={'default'}
  size={'small'}
  onClick={'onClick'}
  text={'Button'}
  disabled={false}
  href={'javascript:void(0)'}
  styled={styled}
/>
```

<!-- STORY -->

## Props

|  propName  | propType | defaultValue | isRequired | description                                      |
| :--------: | :------: | :----------: | :--------: | ------------------------------------------------ |
| variant    |  string  |      -       |     -      | type button                                      |
| color      |  string  |      -       |     -      | color button                                     |
| size       |  string  |   'small'    |     -      | size button                                      |
| onClick    | Function |      -       |     -      | Callback function when user clicks on the Button |
| text       |  string  |      -       |     -      | text button                                      |
| disabled   | boolean  |      false   |     -      | status button                                    |
| href       | string   |      -       |     -      | href button                                      |
| styled     | object   |      -       |     -      | custom styled button                             |
