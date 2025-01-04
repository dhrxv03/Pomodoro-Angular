import { Routes } from '@angular/router';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { TaskTableComponent } from './components/task-table/task-table.component';

export const routes: Routes = [
  { path: '', component: PomodoroTimerComponent },
  { path: 'tasks', component: TaskTableComponent }
];