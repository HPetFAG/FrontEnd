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
import { Subject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal',
  imports: [
    LucideAngularModule,
    BasicCardComponent,
    AnimalsCardComponent,
    CommonModule,
    FormsModule,
  ],
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

  animals: Animal[] = [];
  meta: any;
  searchTerm = '';
  searchSubject = new Subject<string>();
  page = 1;

  ngOnInit(): void {
    this.LoadAllAnimals(this.page);
  }

  constructor(private router: Router, private animalService: AnimalService) {
    this.initializeSearch();
  }

  private initializeSearch(): void {
    this.searchSubject
      .pipe(switchMap((term) => this.animalService.searchByName(term)))
      .subscribe((data) => {
        this.animals = data;
      });
  }

  searchAnimal(term: string): void {
    if (!term.trim()) {
      this.LoadAllAnimals(this.page);
      return;
    }
    this.searchSubject.next(term);
  }

  Create() {
    this.router.navigate(['/dashboard/registrar']);
  }

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

  DeleteAnimal(id: number) {
    // console.log('Deletando animal com id:', id);
    this.animalService.deleteUser(id).subscribe(() => {
      this.LoadAllAnimals(this.page);
    });
  }

  EditAnimal(id: number) {
    // console.log('Editando animal com id:', id);
    this.router.navigate(['/dashboard/editar', id]);
  }

  // Incrementa página (ir para próxima página)
  NextPage(): void {
    if (this.page < this.meta.totalPages) {
      this.page++;
      this.LoadAllAnimals(this.page);
    }
  }

  // Decrementa página (ir para página anterior)
  PreviousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.LoadAllAnimals(this.page);
    }
  }
}
