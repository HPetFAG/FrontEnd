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
  isSearching = false;
  totalRegistered: number = 0;
  totalAvailables: number = 0;
  totalAdopted: number = 0;

  ngOnInit(): void {
    this.LoadAllAnimals(this.page);
    this.getTotalRegistered();
    this.getTotalAvailables();
    this.getTotalAdopted();
  }

  constructor(private router: Router, private animalService: AnimalService) {
    this.initializeSearch();
  }

  private initializeSearch(): void {
    this.searchSubject
      .pipe(
        switchMap((term) => {
          this.searchTerm = term;
          this.page = 1;
          return this.animalService.searchByName(term, this.page);
        })
      )
      .subscribe((res) => {
        this.animals = res.items;
        this.meta = res.meta;
      });
  }

  searchAnimal(term: string): void {
    if (!term.trim()) {
      this.searchTerm = '';
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
    this.animalService.deleteUser(id).subscribe(() => {
      if (this.isSearching) {
        this.searchAnimal(this.searchTerm);
      } else {
        this.LoadAllAnimals(this.page);
      }
    });
  }

  EditAnimal(id: number) {
    this.router.navigate(['/dashboard/editar', id]);
  }

  NextPage(): void {
    if (this.page < this.meta.totalPages) {
      this.page++;
      if (this.searchTerm.trim()) {
        this.animalService
          .searchByName(this.searchTerm, this.page)
          .subscribe((res) => {
            this.animals = res.items;
            this.meta = res.meta;
          });
      } else {
        this.LoadAllAnimals(this.page);
      }
    }
  }

  PreviousPage(): void {
    if (this.page > 1) {
      this.page--;
      if (this.searchTerm.trim()) {
        this.animalService
          .searchByName(this.searchTerm, this.page)
          .subscribe((res) => {
            this.animals = res.items;
            this.meta = res.meta;
          });
      } else {
        this.LoadAllAnimals(this.page);
      }
    }
  }

  getTotalRegistered(): void {
    this.animalService.getTotalRegistered().subscribe((res) => {
      this.totalRegistered = res;
    });
  }

  getTotalAvailables(): void {
    this.animalService.getTotalAvailables().subscribe((res) => {
      this.totalAvailables = res;
    });
  }

  getTotalAdopted(): void {
    this.animalService.getTotalAdopted().subscribe((res) => {
      this.totalAdopted = res;
    });
  }
}
