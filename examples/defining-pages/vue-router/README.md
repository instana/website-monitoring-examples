# Vue-Router Example

This example shows how to [define pages](https://docs.instana.io/products/website_monitoring/api/#page) for websites
making use of [Vue](https://vuejs.org/) with [vue-router](https://router.vuejs.org/installation.html).

## How To Try This Example?

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/defining-pages/vue-router
npm install
npm run serve
```

## Where Is The Important Part?

 - The EUM snippet is added to `public/index.html`.
 - The pages are defined in `src/main.js` by making use of a custom history object.

## TLDR

```javascript
router.afterEach(to => {
  let pageName = to.path
  if (to.matched && to.matched.length > 0 && to.matched[0].path) {
    pageName = to.matched[0].path
  }

  // eslint-disable-next-line no-console
  console.log('Set page to', pageName)

  // eslint-disable-next-line no-undef
  ineum('page', pageName)
})
```
