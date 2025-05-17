import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    /* this.items = [
      {
        label: '/',
        routerLink: '/',
        routerLinkActiveOptions: {
          exact: true
        }
      },
      {
        label: '/projets',
        items: [
          { label: 'airtel-companion' },
          { label: 'city-guide' },
          { label: 'niuz' },
          { label: 'pharmada', routerLink: '/pharmada' },
        ]
      },
      {
        label: '/contact',
        routerLink: '/contact'
      }
    ]; */
  }
}
