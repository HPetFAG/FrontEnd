import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { InputComponent } from '../../components/forms/input/input.component';
import { SelectComponent } from '../../components/forms/select/select.component';
import { TextareaComponent } from '../../components/forms/textarea/textarea.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { Animal } from '../../models/animal.model';
import { Form } from '../../models/forms.model';
import { FormService } from '../../service/forms/form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adoptionform',
  imports: [
    LucideAngularModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    FormsModule,
  ],
  templateUrl: './adoptionform.component.html',
})
export class AdoptionformComponent {
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

  isEditMode = false;

  constructor(
    private router: Router,
    private animalService: AnimalService,
    private formsService: FormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      const id = Number(idParam);
      this.loadAnimal(id);
    }
  }

  loadAnimal(id: number): void {
    this.animalService.getAnimalByID(id).subscribe({
      next: (animal) => {
        this.Animal = animal;
        this.Forms.animal = animal; // Atribua o objeto inteiro
        console.log(this.Forms.animal); // Aqui você pode verificar o ID
      },
      error: (err) => {
        console.error('Erro ao carregar animal', err);
      },
    });
  }

  CreateNewForm() {
    const formPayload = {
      ...this.Forms,
      id_animal: this.Animal.id, // <-- campo que o back-end espera
    };

    delete (formPayload as any).animal; // remove o campo 'animal' se necessário

    this.formsService.createForm(formPayload).subscribe(
      () => {
        console.log('Formulário enviado:', formPayload);
      },
      (error) => {
        console.error('Erro ao criar formulário:', error);
      }
    );
  }
}
