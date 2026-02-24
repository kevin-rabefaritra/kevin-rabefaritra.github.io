import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmadaComponent } from './projects/pharmada/pharmada.component';
import { PrivacyPolicyComponent } from './projects/pharmada/privacy-policy/privacy-policy.component';
import { DocsPage } from './docs/pages/docs.page';

export const routes: Routes = [
  { path: '', title: 'Kevin Rabefaritra - le site existe !', component: HomeComponent },

  // Projects
  { path: 'pharmada', title: 'Pharmada', component: PharmadaComponent },
  { path: 'pharmada/privacy-policy', title: 'Pharmada Privacy policy', component: PrivacyPolicyComponent },

  // Docs
  { path: 'documents', title: 'Documents', component: DocsPage },
  { path: 'documents/:src', title: 'Documents', component: DocsPage }
];
