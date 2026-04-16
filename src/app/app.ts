import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentaComponent } from './componenta/componenta';
import { ComponentbComponent } from './componentb/componentb';

@Component({
  selector: 'root-directive',
  standalone: true,
  imports: [RouterOutlet, ComponentaComponent, ComponentbComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-two-components');
}