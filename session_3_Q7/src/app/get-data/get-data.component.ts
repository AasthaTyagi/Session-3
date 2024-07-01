import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-data',
  standalone: true,
  imports: [],
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css'
})
export class GetDataComponent {
  finalResult : string =''

  constructor( private dataService : DataService){}

  ngOnInit(){
    this.dataService.currentData.subscribe(data=> this.finalResult = data)
  }

}
