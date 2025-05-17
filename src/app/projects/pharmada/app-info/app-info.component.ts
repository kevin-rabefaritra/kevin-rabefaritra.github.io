import { Component, Input } from '@angular/core';

@Component({
  selector: 'pharmada-app-info',
  imports: [],
  templateUrl: './app-info.component.html',
  styleUrl: './app-info.component.scss'
})
export class AppInfoComponent {

  @Input() class?: string;
}
