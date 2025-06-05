import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { Animal } from '../../models/animal.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnfoldVertical } from 'lucide-angular';

@Component({
  selector: 'app-animalform',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './animalform.component.html',
})
export class AnimalformComponent {
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

  constructor(private router: Router, private animalService: AnimalService) {}

  Back() {
    this.router.navigate(['/dashboard/animal']);
  }

  CreateAnimal(): void {
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
        console.error('Error ao Criar usuario: ', error);
      }
    );
  }
}
