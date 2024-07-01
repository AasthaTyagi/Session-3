import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css'
})
export class SetDataComponent {
  newData : string =''

  constructor( private dataService : DataService){}

  setData(){
    this.dataService.changeData(this.newData)
  }

}
