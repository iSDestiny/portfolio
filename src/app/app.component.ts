import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfolio';
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(filter(event => event instanceof NavigationEnd));
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-151107864-1', {page_path: event.urlAfterRedirects});
    });
  }
}
