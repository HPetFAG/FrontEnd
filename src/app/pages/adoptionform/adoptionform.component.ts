import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { InputComponent } from "../../components/forms/input/input.component";
import { SelectComponent } from "../../components/forms/select/select.component";
import { TextareaComponent } from "../../components/forms/textarea/textarea.component";

@Component({
  selector: 'app-adoptionform',
  imports: [LucideAngularModule, InputComponent, SelectComponent, TextareaComponent],
  templateUrl: './adoptionform.component.html',

})
export class AdoptionformComponent {
  readonly paw = PawPrint
}
