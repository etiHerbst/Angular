import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Unstall } from './unstall/unstall'; // נתיב הייבוא לפי מיקום הקומפוננטה

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Unstall ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sem');
}
