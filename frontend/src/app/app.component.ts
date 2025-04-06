import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet]
})
export class AppComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('WorkoutAI');
  }
}
