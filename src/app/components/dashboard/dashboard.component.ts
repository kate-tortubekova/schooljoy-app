import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, MainContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
