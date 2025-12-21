
export interface DocFile {
  name: string;
  description?: string;
  content?: DocFile[];
  src?: string;
}