import { inject, Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  setInfo(title: string, description?: string): void {
    this.titleService.setTitle(title);
    
    // title
    this.metaService.updateTag({ property: 'og:title', content: title });

    if (description) {
      this.metaService.updateTag({ name: 'description', content: description});
      this.metaService.updateTag({ property: 'og:description', content: description});
    }
  }
}