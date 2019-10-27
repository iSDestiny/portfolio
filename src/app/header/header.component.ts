import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  showNavbar = false;
  activeFragment = this.route.fragment.pipe(share());
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

  onToggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
