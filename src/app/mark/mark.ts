import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgFor} from '@angular/common';


interface marks {
  subject: string;
  mark: number;
}

@Component({
  selector: 'app-mark',
  imports: [CommonModule,CommonModule, NgFor],
  templateUrl: './mark.html',
  styleUrl: './mark.css',
})
export class Mark {

marksList: marks[] = [{subject:'English',mark:90}, 
                      {subject:'french',mark:80},
                      {subject:'Math',mark:90},
                      {subject:'Gym',mark:50},
                      {subject:'Angular',mark:100},
];

// פונקציה שמחשבת את ממוצע הציונים
calculateAverage(): number {
  if (this.marksList.length === 0) return 0;
  
  let sum = 0;
  for (let m of this.marksList) {
    sum += m.mark;
  }
  return sum / this.marksList.length;
}



}
