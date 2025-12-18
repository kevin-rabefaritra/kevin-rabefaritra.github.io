import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmadaComponent } from './projects/pharmada/pharmada.component';
import { PrivacyPolicyComponent } from './projects/pharmada/privacy-policy/privacy-policy.component';
import { DocsPage } from './docs/pages/docs.page';

export const routes: Routes = [
  { path: '', title: 'Accueil', component: HomeComponent },

  // Projects
  { path: 'pharmada', title: 'Pharmada', component: PharmadaComponent },
  { path: 'pharmada/privacy-policy', title: 'Pharmada | Privacy policy', component: PrivacyPolicyComponent },

  // Docs
  {
    path: 'documents', children: [
      { path: '', title: 'Documents', component: DocsPage }
    ]
  }
];
