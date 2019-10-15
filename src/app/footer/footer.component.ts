import { Component, OnInit } from '@angular/core';
import {faFacebook, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  icons = {linkedIn: faLinkedinIn, github: faGithub, facebook: faFacebook};

  constructor() { }

  ngOnInit() {
  }

}
