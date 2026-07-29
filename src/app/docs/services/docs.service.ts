import { Injectable } from "@angular/core";
import { DocFile } from "../models/doc-file.model";

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  getDocs(): DocFile[] {
    return [
      { name: 'Élection présidentielle 2023', description: 'Madagascar - Chiffres sur les électeurs de l\'élection présidentielle 2023', src: 'election-presidentielle-2023', type: 'md' },
      { name: 'Évolution budget loi de finances', description: 'Madagascar - Évolution du budget des lois de finances', src: 'evolution-budget-loi-finances', type: 'html', file: 'evolution-budget-loi-finances.csv' },
    ].sort((a, b) => a.name.localeCompare(b.name));
  }

  findBySrc(src: string | undefined | null): DocFile | null {
    if (!src) {
      return null;
    }

    return this.getDocs().find(doc => doc.src === src) || null;
  }
}