import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetDataComponent } from './set-data/set-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SetDataComponent, GetDataComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session_3_Q7';
}
