import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmadaComponent } from './projects/pharmada/pharmada.component';
import { NiuzComponent } from './projects/niuz/niuz.component';
import { PrivacyPolicyComponent } from './projects/pharmada/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', title: 'site de kevin', component: HomeComponent },

  // Projects
  { path: 'pharmada', title: 'Pharmada', component: PharmadaComponent },
  { path: 'pharmada/privacy-policy', title: 'Pharmada - Privacy policy', component: PrivacyPolicyComponent},

  { path: 'niuz', title: 'Niuz', component: NiuzComponent }
];
