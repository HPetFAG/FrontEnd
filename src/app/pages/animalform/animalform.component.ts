import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { Animal } from '../../models/animal.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnfoldVertical } from 'lucide-angular';
import { InputComponent } from '../../components/forms/input/input.component';
import { TextareaComponent } from '../../components/forms/textarea/textarea.component';
import { SelectComponent } from '../../components/forms/select/select.component';

@Component({
  selector: 'app-animalform',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    SelectComponent,
  ],
  templateUrl: './animalform.component.html',
})
export class AnimalformComponent implements OnInit {
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

  Back() {
    this.router.navigate(['/dashboard/animal']);
  }

  CreateAnimal(): void {
    this.Animal.weight = Number(this.Animal.weight);
    this.Animal.height = Number(this.Animal.height);

    if (this.Animal.vaccinated === true) {
      this.Animal.vaccinated = true;
    } else if (this.Animal.vaccinated === false) {
      this.Animal.vaccinated = false;
    }

    if (this.Animal.castrated === true) {
      this.Animal.castrated = true;
    } else if (this.Animal.castrated === false) {
      this.Animal.castrated = false;
    }

    if (this.Animal.microchipped === true) {
      this.Animal.microchipped = true;
    } else if (this.Animal.microchipped === false) {
      this.Animal.microchipped = false;
    }

    this.animalService.createUser(this.Animal).subscribe(
      () => {
         console.log('animal cadastrado com sucesso');
        this.router.navigate(['/dashboard/animal']);
      },
      (error) => {
        console.log(this.Animal)
        console.error('Error ao Criar Animal: ', error);
      }
    );
  }
}
