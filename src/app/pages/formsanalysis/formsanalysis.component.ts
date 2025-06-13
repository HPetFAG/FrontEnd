import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { Animal } from '../../models/animal.model';
import { Form } from '../../models/forms.model';
import { InputComponent } from "../../components/forms/input/input.component";
import { SelectComponent } from "../../components/forms/select/select.component";
import { TextareaComponent } from "../../components/forms/textarea/textarea.component";

@Component({
  selector: 'app-formsanalysis',
  imports: [LucideAngularModule, InputComponent, SelectComponent, TextareaComponent],
  templateUrl: './formsanalysis.component.html',
})
export class FormsanalysisComponent {
  Animal: Animal = {
    id: 0,
    name: '',
    age: '',
    race: '',
    gender: '',
    species: '',
    color: '',
    size: '',
    weight: 0,
    height: 0,
    physicalDescription: '',
    vaccinated: false,
    castrated: false,
    microchipped: false,
    observation: '',
    status: 'disponivel',
    createAt: new Date(),
  };

  Forms: Form = {
    id: 0,
    animal: this.Animal,
    name: '',
    phone: '',
    document: '',
    profession: '',
    address: '',
    residenceType: '',
    hasYard: false,
    hasOtherAnimals: false,
    currentlyHasOtherAnimals: false,
    hasExperience: false,
    reasonToAdopt: '',
    status: 'recebido',
    createdAt: new Date(),
  };

  readonly paw = PawPrint;
}
