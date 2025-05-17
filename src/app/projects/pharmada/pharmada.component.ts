import { AfterViewInit, Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppInfoComponent } from "./app-info/app-info.component";

@Component({
  selector: 'app-pharmada',
  imports: [
    FormsModule,
    AppInfoComponent
],
  templateUrl: './pharmada.component.html',
  styleUrl: './pharmada.component.scss'
})
export class PharmadaComponent {

}
