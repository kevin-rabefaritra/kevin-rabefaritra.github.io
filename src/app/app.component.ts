import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.updateSeo());
    this.updateSeo();
  }

  private updateSeo(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const snapshot = route.snapshot;
    this.seoService.setInfo(
      snapshot.title ?? 'Kevin Rabefaritra — Consultant IT / full-stack',
      snapshot.data['description'],
      this.router.url
    );
  }
}
