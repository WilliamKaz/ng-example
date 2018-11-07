import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-ToDo';
  linksArray = [
    {
      name: 'Stack Overflow',
      link: 'https://stackoverflow.com/questions/40726081/angular-cli-from-css-to-scss'
    },
    {
      name: 'Apple',
      link: 'https://apple.stackexchange.com/questions/254380/macos-mojave-invalid-active-developer-path'
    },{
      name: 'GitHub',
      link: 'https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/'
    },
  ];;
}
