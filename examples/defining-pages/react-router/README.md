# React-Router Example

This example shows how to [define pages](https://docs.instana.io/products/website_monitoring/api/#page) for websites
making use of [React](https://reactjs.org/) with [react-router](https://reacttraining.com/react-router/).

## How To Try This Example?

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/defining-pages/react-router
npm install
npm start
```

## Where Is The Important Part?

 - The EUM snippet is added to `public/index.html`.
 - The pages are defined in `src/App.js` by making use of a custom history object.

## TLDR

```javascript
const customHistory = createBrowserHistory();

customHistory.listen(location => {
  console.log('Set page to', location.pathname);

  // eslint-disable-next-line no-undef
  ineum('page', location.pathname);

  // Note that the above can result in many useless pages when you are making use of path parameters.
  // In these cases you will have to define the page via different means, e.g. by creating a custom
  // Route component which accepts a 'pageName' property.
});

…

<Router history={customHistory}>
 …
</Router>
```
