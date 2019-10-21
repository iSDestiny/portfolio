import { Component, OnInit } from '@angular/core';
import {
  faAngular,
  faCss3,
  faFacebook,
  faGit,
  faGithub,
  faHtml5, faJava,
  faLinkedinIn,
  faNodeJs,
  faPython, faReact
} from '@fortawesome/free-brands-svg-icons';
import {faCode, faDatabase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  icons = {
    linkedIn: faLinkedinIn,
    github: faGithub,
    facebook: faFacebook,
    python: faPython,
    javascript: faNodeJs,
    database: faDatabase,
    git: faGit,
    html5: faHtml5,
    css3: faCss3,
    angular: faAngular,
    react: faReact,
    java: faJava,
    code: faCode
  };

  hovers = {
    fabflix: false
  };
  constructor() { }

  ngOnInit() {
  }

}
