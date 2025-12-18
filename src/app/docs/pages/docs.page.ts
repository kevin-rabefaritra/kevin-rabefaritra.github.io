import { AfterViewInit, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DocFile } from '../models/doc-file.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostComponent } from "../components/post/post.component";
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-docs',
  imports: [RouterModule, PostComponent],
  templateUrl: './docs.page.html',
  styleUrl: './docs.page.scss'
})
export class DocsPage implements OnInit {

  private readonly route = inject(ActivatedRoute);

  files: DocFile[] = [
    {
      name: 'docs', content: [
        {
          name: 'general', content: [
            { name: 'Élection présidentielle 2023', src: 'election-presidentielle-2023' }
          ]
        },
        {
          name: 'education'
        }
      ]
    }
  ];

  selectedSrc = signal<string | null>(null);

  ngOnInit(): void {
    const doc = this.route.snapshot.paramMap.get('src');
    if (doc) {
      this.selectedSrc.set(doc);
    }
  }
}
