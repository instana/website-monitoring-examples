# Angular-Router Example

This example shows how to [define pages](https://docs.instana.io/products/website_monitoring/api/#page) for websites
making use of [Angular](https://angular.io) with [Angular's router](https://angular.io/guide/router).

## How To Try This Example?

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/defining-pages/angular-router
npm install
npm start
```

## Where Is The Important Part?

 - The EUM snippet is added to `src/index.html`.
 - The pages are defined in `src/app/app.component.ts` by making use of router events.
 - The global `ineum` type is defined in `src/custom-typings/globals.d.ts` (referenced in `src/tsconfig.app.json`).

## TLDR

```typescript
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-router';

  constructor(private router: Router) {}

  ngOnInit() {
    let pageName;

    this.router.events
      .subscribe(event => {
        // Identifies the name of the page. The name of the page
        // is unfortunately not available on the NavigationEnd event, so we have to
        // get it from the the ActivationEnd. The ActivationEnd is the last
        // event in the router chain for which an ActivatedRouteSnapshot is
        // available.
        if (event instanceof ActivationEnd) {
          pageName = undefined;
          if (event.snapshot && event.snapshot.routeConfig && event.snapshot.routeConfig.path) {
            pageName = event.snapshot.routeConfig.path;
          }

        // Once the navigation finished, report the page name to Instana.
        } else if (event instanceof NavigationEnd && typeof ineum !== 'undefined') {
          console.log('Set page to', pageName)
          ineum('page', pageName);
        }
      });
  }
}

```
