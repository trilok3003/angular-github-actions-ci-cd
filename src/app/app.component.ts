import { Component } from '@angular/core';
// https://dev.to/rodrigokamada/hosting-an-angular-application-on-github-pages-using-github-actions-5ag8
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-github-actions-ci-cd';
}
