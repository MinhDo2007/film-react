# `<Popover />`

## Usage

```js
import Popover from 'components/atoms/Popover'
```

### Default Usage

```jsx
<Popover
  onClick={'onClick'}
  open
  anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
  transformOrigin={{vertical: 'top', horizontal: 'center'}}
  eventType={'click'}
  targetComponent={<Button text="popover button" />}
>
  Popover Context
</Popover>  
```

<!-- STORY -->

## Props

|  propName     | propType | defaultValue         | isRequired | description                                      |
| :--------:    | :------: | :----------:         | :--------: | ------------------------------------------------ |
| onClick       | Function |      -               |     -      | Callback function when user clicks on the Button |
| open          |  boolean |      true            |     -      | display popover context when click button        |
|anchorOrigin   | Object   |{vertical: 'bottom',  |     -      | popover style                                    |
|               |          | horizontal: 'center'}| 
|transformOrigin| Object   |{vertical: 'top',     |     -      | popover style                                    |
|               |          | horizontal: 'center'}|
| eventType     | string   |      'click'         |     -      | event when open popover ('click', 'mouseEnter')  |
|targetComponent| Node     |      +               |     +      | Button or Text or Icon                           |
|children       | text     |      -               |     -      | content popover                                  |