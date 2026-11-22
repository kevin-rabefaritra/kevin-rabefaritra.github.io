import { inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";

export const SITE_URL = 'https://www.kevin.mg';
export const SITE_NAME = 'Kevin Rabefaritra — Consultant IT / full-stack';

const DEFAULT_DESCRIPTION =
  'Portfolio de Kevin Rabefaritra, consultant IT / full-stack';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  setInfo(title: string, description?: string, path?: string): void {
    const fullTitle = title.includes('Kevin Rabefaritra') ? title : `${SITE_NAME.split(' — ')[0]} — ${title}`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = path ? `${SITE_URL}${path === '/' ? '/' : path}` : SITE_URL + '/';

    // <title>
    this.titleService.setTitle(fullTitle);

    // standard meta
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.metaService.updateTag({ property: 'og:locale', content: 'fr_FR' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter / X
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });

    // canonical
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
