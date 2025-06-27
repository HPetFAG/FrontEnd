import { Component } from '@angular/core';
import {
  Cake,
  CakeSlice,
  ChevronLeft,
  ChevronRight,
  Heart,
  LucideAngularModule,
  Map,
  Mars,
  PawPrint,
  Phone,
  TrendingDown,
  TrendingUp,
  User,
} from 'lucide-angular';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { AdoptionCardComponent } from "../../components/adoption-card/adoption-card.component";
import { AnimalService } from '../../service/animals/animal.service';

@Component({
  selector: 'app-homepage',
  imports: [LucideAngularModule, BasicCardComponent, AdoptionCardComponent],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  readonly paw = PawPrint;
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;
  readonly heart = Heart;
  readonly Chevronleft = ChevronLeft;
  readonly Chevronright = ChevronRight;

  totalAvailables: number = 0;
  progressAavailables: number = 0;
  totalAdopted: number = 0;
  progressAdopted: number = 0;
  metaAdoptions: number = 0;
  meta: number = 0;
  total: number = 0;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getTotalAvailables();
    this.getProgressAvailables();
    this.getTotalAdopted();
    this.getProgressAdopted();
    this.getMetaAdoption();
    this.returnMetaAdoption();
  }

  getTotalAvailables(): void {
    this.animalService.getTotalAvailables().subscribe((res) => {
      this.totalAvailables = res;
    });
  }

  getProgressAvailables(): void {
    this.animalService.getProgressAvailables().subscribe((res) => {
      this.progressAavailables = res;
    });
  }

  getTotalAdopted(): void {
    this.animalService.getTotalAdopted().subscribe((res) => {
      this.totalAdopted = res;
    });
  }

  getProgressAdopted(): void {
    this.animalService.getProgressAdopted().subscribe((res) => {
      this.progressAdopted = res;
    });
  }

  negativeOrPositive(progress: number): 'positive' | 'negative' {
    return progress >= 0 ? 'positive' : 'negative';
  }

  getMetaAdoption(): void {
    this.animalService.getMetaAdoption().subscribe((res) => {
      this.metaAdoptions = res;
    });
  }

  returnMetaAdoption(): void {
    this.animalService.returnMetaAdoption().subscribe((res) => {
      this.meta = res;
    });
  }

  missingMeta(): number {
    this.total = this.meta - this.totalAdopted;
    return this.total;
  }

}


