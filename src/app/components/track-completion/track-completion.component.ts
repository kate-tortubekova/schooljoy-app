import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

interface StatusData {
  label: string;
  count: number;
  colorClass: string;
  color: string;
}

@Component({
  selector: 'app-track-completion',
  imports: [CommonModule],
  templateUrl: './track-completion.component.html',
  styleUrl: './track-completion.component.scss'
})
export class TrackCompletionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  totalStudents = 50;
  chart: Chart | undefined;
  
  statusData: StatusData[] = [
    { label: 'Not Started', count: 5, colorClass: 'legend-not-started', color: '#AEB2BA' },
    { label: 'Completed', count: 40, colorClass: 'legend-completed', color: '#5CDD9F' },
    { label: 'In Progress', count: 25, colorClass: 'legend-in-progress', color: '#F4AF29' },
    { label: 'At Risk', count: 1, colorClass: 'legend-at-risk', color: '#F36184' }
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = this.chartContainer.nativeElement.getContext('2d');
    
    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: this.statusData.map(item => item.label),
        datasets: [{
          data: this.statusData.map(item => item.count),
          backgroundColor: this.statusData.map(item => item.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
