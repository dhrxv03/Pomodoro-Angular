import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent {
  timeLeft: number = 25 * 60;
  interval: any;
  isRunning: boolean = false;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.isRunning = false;
          clearInterval(this.interval);
        }
      }, 1000);
    }
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.timeLeft = 25 * 60;
  }
}