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
}
