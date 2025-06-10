import { Component } from '@angular/core';
import { LucideAngularModule, PawPrint } from 'lucide-angular';
import { InputComponent } from '../../components/forms/input/input.component';
import { SelectComponent } from '../../components/forms/select/select.component';
import { TextareaComponent } from '../../components/forms/textarea/textarea.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-adoptionform',
  imports: [
    LucideAngularModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
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

  readonly paw = PawPrint;

  isEditMode = false;

  constructor(
    private router: Router,
    private animalService: AnimalService,
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
      },
      error: (err) => {
        console.error('Erro ao carregar animal', err);
      },
    });
  }
}
