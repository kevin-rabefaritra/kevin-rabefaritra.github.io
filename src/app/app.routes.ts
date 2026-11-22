import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmadaComponent } from './projects/pharmada/pharmada.component';
import { PrivacyPolicyComponent } from './projects/pharmada/privacy-policy/privacy-policy.component';
import { DocsPage } from './docs/pages/docs.page';

export const routes: Routes = [
  {
    path: '', title: 'Kevin Rabefaritra - le site existe !', component: HomeComponent,
    data: {
      description: 'Consultant IT / full-stack'
    }
  },

  // Projects
  {
    path: 'pharmada', title: 'Pharmada, application mobile', component: PharmadaComponent,
    data: {
      description: 'Pharmada : application mobile pour consulter les pharmacies de garde, numéros d\'urgence et établissements de santé à Madagascar.'
    }
  },
  {
    path: 'pharmada/privacy-policy', title: 'Pharmada, privacy policy', component: PrivacyPolicyComponent,
    data: {
      description: 'Politique de confidentialité de l\'application Pharmada.'
    }
  },

  // Docs
  {
    path: 'documents', title: 'Kevin Rabefaritra - Documents', component: DocsPage,
    data: {
      description: 'Divers documents et analyses'
    }
  },
  {
    path: 'documents/:src', title: 'Kevin Rabefaritra - Documents', component: DocsPage,
    data: {
      description: 'Divers documents et analyses'
    }
  }
];
