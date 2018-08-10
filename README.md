# Film React

## Requirements

- Node.js (We recommend latest LTS)
- [yarn](https://yarnpkg.com)

## Installation

1. Install dependencies
    ```
    yarn
    ```

## Development

### Browsers

```
yarn start
```

### Electron

```
yarn start-electron
```

> IMPORTANT: Make sure that `NODE_ENV` is set to `development`

## Lint

```
yarn lint
```

### Lint CSS only

```
yarn lint:css
```

### Lint JS only

```
yarn lint:js
```

## Format code

```
yarn format
```

## Analyze webpack production bundles

### Start web server

```
yarn analyze:start
```

### Generate a static report HTML

```
yarn analyze:static
```

## Test

```
yarn test
```

With watch mode:

```
yarn test -w
```

### Generate test coverage report

```
yarn coverage
```

### Type checks

```
yarn flow
```

## Storybook

### Initialize server

```
yarn storybook
```

### Build

```
yarn storybook:build
```

## ESDoc

### Generate document

```
yarn docs:generate
```

### Initialize static server for ./docs

```
yarn docs:serve
```

### Generate docs and initialize server

```
yarn docs
```
