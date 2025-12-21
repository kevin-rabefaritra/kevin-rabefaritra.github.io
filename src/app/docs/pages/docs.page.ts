import { AfterViewInit, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DocFile } from '../models/doc-file.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostComponent } from "../components/post/post.component";
import { Observable, switchMap } from 'rxjs';
import { DocsService } from '../services/docs.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-docs',
  imports: [RouterModule, PostComponent],
  templateUrl: './docs.page.html',
  styleUrl: './docs.page.scss'
})
export class DocsPage implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly docsService = inject(DocsService);
  private readonly seoService = inject(SeoService);

  files: DocFile[] = [];

  selectedDoc = signal<DocFile | null>(null);

  ngOnInit(): void {
    this.files = this.docsService.getDocs();
    this.route.paramMap.subscribe(params => {
      const src = params.get('src');
      const doc = this.docsService.findBySrc(src);
      if (doc) {
        this.selectedDoc.set(doc);
        this.seoService.setInfo(doc.name, doc.description);
      }
    });
  }
}
