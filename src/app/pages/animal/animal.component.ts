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

  searchTerm = '';
  searchSubject = new Subject<string>();

  ngOnInit(): void {
    console.log('ListagemComponent - ngOnInit');
    this.LoadAllAnimals();
  }

  animals: Animal[] = [];

  constructor(
    private router: Router,
    private animalService: AnimalService,
    private http: HttpClient
  ) {
    this.searchSubject
      .pipe(
        switchMap((term) => this.animalService.searchByName(term))
      )
      .subscribe((data) => {
        this.animals = data;
      });
  }

  searchAnimal(term: string): void {
    if (!term.trim()) {
      this.LoadAllAnimals();
      return;
    }
    this.searchSubject.next(term);
  }

  Create() {
    this.router.navigate(['/dashboard/registrar']);
  }

  LoadAllAnimals(): void {
    this.animalService.getUsers().subscribe((res) => {
      this.animals = res;
      // console.log('Animal carregados:', this.animals);
    }, (error) => {
      console.log("Erro ao carregar animais")
    });
  }

  DeleteAnimal(id: number) {
    console.log('Deletando animal com id:', id);
    this.animalService.deleteUser(id).subscribe(() => {
      this.LoadAllAnimals();
    });
  }

  EditAnimal(id: number) {
    // console.log('Editando animal com id:', id);
      this.router.navigate(['/dashboard/editar', id]);
  }
}
