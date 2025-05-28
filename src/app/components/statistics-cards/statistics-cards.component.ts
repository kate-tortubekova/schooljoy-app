import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Statistic {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-statistics-cards',
  imports: [CommonModule],
  templateUrl: './statistics-cards.component.html',
  styleUrl: './statistics-cards.component.scss'
})
export class StatisticsCardsComponent {
  statistics: Statistic[] = [
    { value: 50, label: 'Total Students Enrolled' },
    { value: 5, label: 'Badges' },
    { value: '68%', label: 'Completion Rate' },
    { value: 5, label: 'Students At Risk' }
  ];
}
