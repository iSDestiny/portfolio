import { Component, OnInit } from '@angular/core';
import {
  faAngular, faAws,
  faCss3,
  faFacebook,
  faGit,
  faGithub,
  faHtml5, faJava, faJs,
  faLinkedinIn, faNode,
  faNodeJs,
  faPython, faReact,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import {faCode, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {Project} from './project';

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
    javascript: faJs,
    nodejs: faNode,
    database: faDatabase,
    git: faGit,
    html5: faHtml5,
    css3: faCss3,
    angular: faAngular,
    react: faReact,
    java: faJava,
    code: faCode,
    aws: faAws,
    sass: faSass
  };

  projects =
    [new Project('Fabflix', 'url(\'assets/images/fabflix.png\')',
    [this.icons.java, this.icons.javascript, this.icons.html5, this.icons.css3],
    {'http://13.52.185.39:8080/project1/': 'View Site',
      'https://github.com/iSDestiny/Fabflix': this.icons.github}),
    new Project('Othello/Reversi', 'url(\'assets/images/othello_game.png\')',
      [this.icons.python],
      {'https://github.com/iSDestiny/OthelloBoardGame': this.icons.github}),
    new Project('Sleep Tracker', 'url(\'assets/images/sleep-tracker.png\')',
      [this.icons.angular, 'url(\'assets/logos/ionic-icon.svg\')', this.icons.sass, this.icons.javascript],
      {'https://github.com/iSDestiny/sleep-tracker': this.icons.github})];
  constructor() { }

  ngOnInit() {
  }

  isString(val: any): boolean {
    return typeof val === 'string';
  }
}
