import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Newcomp } from "./common/newcomp/newcomp";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Newcomp],


  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
