import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { TrackCompletionComponent } from '../track-completion/track-completion.component';
import { StatisticsCardsComponent } from '../statistics-cards/statistics-cards.component';
import { BadgesTableComponent } from '../badges-table/badges-table.component';

@Component({
  selector: 'app-main-content',
  imports: [
    DashboardHeaderComponent,
    TrackCompletionComponent,
    StatisticsCardsComponent,
    BadgesTableComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
