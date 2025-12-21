import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { Router } from 'express';
import { MarkdownComponent } from 'ngx-markdown';
import { DocFile } from '../../models/doc-file.model';

@Component({
  selector: 'app-post',
  imports: [MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  _doc = signal<DocFile | null>(null);

  @Input({ required: true }) set doc(doc: DocFile) {
    this._doc.set(doc);
  };

  path = computed(() => {
    if (!this._doc()) {
      return `/docs/404.md`;
    }
    return `/docs/${this._doc()!.src}.md`;
  });

  handleError(error: any): void {
    if (error.status === HttpStatusCode.NotFound) {
      this._doc.set(null);
    }
  }
}
