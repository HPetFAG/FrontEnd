import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';

@Component({
  selector: 'app-formsanalysis',
  imports: [LucideAngularModule],
  templateUrl: './formsanalysis.component.html',
})
export class FormsanalysisComponent {
  readonly paw = PawPrint
}
