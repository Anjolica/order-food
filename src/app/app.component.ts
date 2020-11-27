import { Component } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'project-new';
  constructor(
    private router: Router
  ) {
    // this.router.navigateByUrl('/');
  }

  
}
