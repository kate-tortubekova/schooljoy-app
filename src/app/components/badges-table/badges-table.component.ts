import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Badge {
  title: string;
  totalGoals: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  completionRate: number;
}

@Component({
  selector: 'app-badges-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './badges-table.component.html',
  styleUrl: './badges-table.component.scss'
})
export class BadgesTableComponent {
  activeTab: string = 'badges';
  searchTerm = '';
  
  badges: Badge[] = [
    {
      title: 'Frontend Development',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73
    },
    {
      title: 'Backend Development',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73
    },
    {
      title: 'Database Design',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73
    },
    {
      title: 'UI/UX Design',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73
    },
    {
      title: 'DevOps & Deployment',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73
    }
  ];

  setActiveTab(tab: string, event: Event): void {
    event.preventDefault();
    this.activeTab = tab;
  }

  get filteredBadges(): Badge[] {
    if (!this.searchTerm) {
      return this.badges;
    }
    return this.badges.filter(badge => 
      badge.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
