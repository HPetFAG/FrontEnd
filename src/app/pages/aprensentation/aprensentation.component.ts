import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import {
  Calendar,
  Heart,
  LucideAngularModule,
  MapPinIcon,
  PawPrint,
  PinIcon,
  Search,
} from 'lucide-angular';
import { PetCardComponent } from '../../components/landing/pet-card/pet-card.component';
import { AnimalService } from '../../service/animals/animal.service';
import { Router } from '@angular/router';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-aprensentation',
  imports: [LucideAngularModule, PetCardComponent],
  templateUrl: './aprensentation.component.html',
})
export class AprensentationComponent {
  readonly Paw = PawPrint;
  readonly heart = Heart;
  readonly search = Search;
  readonly pin = MapPinIcon;
  readonly calendar = Calendar;
  page = 1;

  constructor(private router: Router, private animalService: AnimalService) {}

  ngOnInit(): void {
    this.LoadAllAnimals(this.page);
  }

  animals: Animal[] = [];
  meta: any;

  LoadAllAnimals(page: number): void {
    this.animalService.getUsers(page).subscribe(
      (res) => {
        this.animals = res.items;
        this.meta = res.meta;
        console.log('Animais carregados:', this.animals);
        console.log('Meta:', this.meta);
      },
      (error) => {
        console.log('Erro ao carregar animais');
      }
    );
  }

  newform(id: number) {
    console.log(id)
  }
}
