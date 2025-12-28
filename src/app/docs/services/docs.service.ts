import { Injectable } from "@angular/core";
import { DocFile } from "../models/doc-file.model";

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  getDocs(): DocFile[] {
    return [
      { name: 'Élection présidentielle 2023', description: 'Madagascar - Chiffres sur les électeurs de l\'élection présidentielle 2023', src: 'election-presidentielle-2023' }
    ].sort((a, b) => a.name.localeCompare(b.name));
  }

  findBySrc(src: string | undefined | null): DocFile | null {
    if (!src) {
      return null;
    }
    
    return this.getDocs().find(doc => doc.src === src) || null;
  }
}