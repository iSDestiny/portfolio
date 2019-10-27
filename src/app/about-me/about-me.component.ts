import { Component, OnInit } from '@angular/core';
import {
  faAngular,
  faCss3,
  faFacebook,
  faGit,
  faGithub,
  faHtml5, faJava, faJs,
  faLinkedinIn, faNode,
  faNodeJs,
  faPython, faReact
} from '@fortawesome/free-brands-svg-icons';
import {faCode, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {share} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  icons = {
    linkedIn: faLinkedinIn,
    github: faGithub,
    facebook: faFacebook,
    python: faPython,
    javascript: faJs,
    nodejs: faNode,
    database: faDatabase,
    git: faGit,
    html5: faHtml5,
    css3: faCss3,
    angular: faAngular,
    react: faReact,
    java: faJava,
    code: faCode
  };
  activeFragment = this.route.fragment.pipe(share());
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
