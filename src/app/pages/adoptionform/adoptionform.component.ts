import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { InputComponent } from "../../components/forms/input/input.component";

@Component({
  selector: 'app-adoptionform',
  imports: [LucideAngularModule, InputComponent],
  templateUrl: './adoptionform.component.html',

})
export class AdoptionformComponent {
  readonly paw = PawPrint
}
