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
          console.log('Set page to', pageName);
          ineum('page', pageName);
        }
      });
  }
}
