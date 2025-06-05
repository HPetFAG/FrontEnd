import { Component, EventEmitter, Output } from '@angular/core';
import {
  Bone,
  ChevronLeft,
  ChevronRight,
  Dog,
  LoaderIcon,
  LucideAngularModule,
  MapPinCheck,
  Search,
} from 'lucide-angular';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { AnimalsCardComponent } from '../../components/animals-card/animals-card.component';
import { Router } from '@angular/router';
import { AnimalService } from '../../service/animals/animal.service';
import { Animal } from '../../models/animal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal',
  imports: [LucideAngularModule, BasicCardComponent, AnimalsCardComponent, CommonModule],
  templateUrl: './animal.component.html',
})
export class AnimalComponent {
  readonly Chevronleft = ChevronLeft;
  readonly Chevronright = ChevronRight;
  readonly bone = Bone;
  readonly dog = Dog;
  readonly loanding = LoaderIcon;
  readonly mappin = MapPinCheck;
  readonly search = Search;

  ngOnInit(): void {
    console.log('ListagemComponent - ngOnInit');
    this.LoadAllAnimals();
  }

  animals: Animal[] = [];

  constructor(private router: Router, private animalService: AnimalService) {}

  Create() {
    this.router.navigate(['/dashboard/registrar']);
  }

  LoadAllAnimals(): void {
    this.animalService.getUsers().subscribe((res) => {
      this.animals = res;
      console.log('Animal carregados:', this.animals);
    });
  }
}
