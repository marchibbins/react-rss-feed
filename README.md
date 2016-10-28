# React RSS feed component

Simple [React](https://facebook.github.io/react/) component that [fetches](https://github.com/github/fetch) an RSS (XML) feed, [converted to JSON](https://github.com/ExactTarget/node-xmljson) and structured in a modifiable [BEM](http://getbem.com/) way.

Built for use in a commercial project, but mostly an excuse to demo [webpack](https://webpack.github.io/), [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme). Also uses [ESLint](http://eslint.org/) and [Babel](https://babeljs.io/).

## Example

```
<RSSFeed url="http://example.com/feed.rss" count="10"/>
```

## Scripts

Build

    npm run build

Watch

    npm run watch

Test

    npm run test

Lint

    npm run lint

Example [http://localhost:8080/example/](http://localhost:8080/example/)

    npm run start
