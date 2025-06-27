import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { Animal } from '../../models/animal.model';
import { Form } from '../../models/forms.model';
import { InputComponent } from '../../components/forms/input/input.component';
import { SelectComponent } from '../../components/forms/select/select.component';
import { TextareaComponent } from '../../components/forms/textarea/textarea.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { FormService } from '../../service/forms/form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formsanalysis',
  imports: [
    LucideAngularModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    FormsModule,
  ],
  templateUrl: './formsanalysis.component.html',
})
export class FormsanalysisComponent implements OnInit {
  constructor(
    private router: Router,
    private animalService: AnimalService,
    private formsService: FormService,
    private route: ActivatedRoute
  ) {}

  isEditMode = false;
  formId!: number; // propriedade pra guardar o ID

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      const id = Number(idParam);
      this.formId = Number(idParam);
      this.loadAnimal(id);
    }
  }

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

  loadAnimal(id: number): void {
    this.formsService.getFormById(id).subscribe({
      next: (animal) => {
        if (!animal) {
          console.error('Formulário não encontrado!');
          return;
        }
        this.Forms = animal[0];

        this.animalService.getAnimalByID(this.Forms.animal.id).subscribe({
          next: (animalData) => {
            if (!animalData) {
              console.error('Animal não encontrado!');
              return;
            }
            this.Animal = animalData;
          },
          error: (err) => {
            console.error('Erro ao carregar animal', err);
          },
        });
      },
      error: (err) => {
        console.error('Erro ao carregar animal', err);
      },
    });
  }

  goBack(): void {
    console.log('Voltar para a lista de formulários');
    this.router.navigate(['dashboard/formularios']);
  }

  rejectForm(): void {
    this.formsService.updateStatus(this.formId, 'Recusado').subscribe({
      next: (updatedForm) => {
        console.log('Formulário rejeitado:', updatedForm);
        this.router.navigate(['dashboard/formularios']);
      },
      error: (err) => console.error('Erro ao rejeitar:', err),
    });
  }

  approveForm(): void {
    this.formsService.updateStatus(this.formId, 'Aprovado').subscribe({
      next: (updatedForm) => {
        console.log('Formulário aprovado:', updatedForm);
        this.router.navigate(['dashboard/formularios']);
      },
      error: (err) => console.error('Erro ao aprovar:', err),
    });
  }
}
