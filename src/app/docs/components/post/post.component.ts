import { HttpStatusCode } from '@angular/common/http';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { DocFile } from '../../models/doc-file.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  imports: [MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  private domSanitizer = inject(DomSanitizer);

  _doc = signal<DocFile | null>(null);

  @Input({ required: true }) set doc(doc: DocFile) {
    this._doc.set(doc);
  };

  type = computed(() => {
    const doc = this._doc();
    if (!doc) {
      return null;
    }

    return doc.type;
  });

  path = computed(() => {
    const doc = this._doc();
    if (!doc) {
      return `/docs/404.md`;
    }

    return `/docs/${doc.src}.${doc.type}`;
  });

  safePath = computed(() => {
    const doc = this._doc();
    if (!doc) {
      return `/docs/404.md`;
    }
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.path());
  });

  filePath = computed(() => {
    const doc = this._doc();
    if (!doc || !doc.file) {
      return null;
    }

    return `/files/${doc.file}`;
  });


  handleError(error: any): void {
    if (error.status === HttpStatusCode.NotFound) {
      this._doc.set(null);
    }
  }
}
