import { Injectable } from "@angular/core";
import { DocFile } from "../models/doc-file.model";

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  getDocs(): DocFile[] {
    return [
      {
        name: 'docs', content: [
          {
            name: 'general', content: [
              { name: 'Élection présidentielle 2023', description: 'Madagascar - Chiffres sur les électeurs de l\'élection présidentielle 2023', src: 'election-presidentielle-2023' }
            ]
          },
          {
            name: 'education'
          }
        ]
      }
    ];
  }

  findBySrc(src: string | undefined | null, root: DocFile | null = null): DocFile | null {
    if (!src) {
      return null;
    }

    if (!root) {
      const docs = this.getDocs();
      return this.findBySrc(src, docs[0]);
    }
    
    for (let content of root.content || []) {
      if (content.src === src) {
        return content;
      }
      return this.findBySrc(src, content);
    }
    return null;
  }
}