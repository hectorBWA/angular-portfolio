import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showProjects: boolean;
  showContact: boolean;
  showHome: boolean;
   constructor() {
        this.showProjects = false;
        this.showContact = false;
        this.showHome = true;
    }
    ShowHomeButton() {
      this.showProjects = false;
      this.showContact = false;
      this.showHome = true;
    }
    ShowProjectsButton() {
      this.showProjects = true;
        this.showContact = false;
        this.showHome = false;
  }
  ShowContactButton() {
    this.showProjects = false;
        this.showContact = true;
        this.showHome = false;
}
}
