import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Router } from 'express';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  imports: [MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  _path = signal<string | null>(null);

  @Input({ required: true }) set src(src: string) {
    this._path.set(`/docs/${src}.md`);
  };

  handleError(error: any): void {
    if (error.status === HttpStatusCode.NotFound) {
      this._path.set(`/docs/404.md`);
    }
  }
}
