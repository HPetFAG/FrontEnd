import { Component } from '@angular/core';
import { Cake, CakeSlice, ChevronLeft, ChevronRight, Heart, LucideAngularModule, Map, Mars, PawPrint, Phone, TrendingDown, TrendingUp, User } from 'lucide-angular';
import { BasicCardComponent } from "../../components/basic-card/basic-card.component";

@Component({
  selector: 'app-homepage',
  imports: [LucideAngularModule, BasicCardComponent],
  templateUrl: './homepage.component.html',

})
export class HomepageComponent {
  readonly paw = PawPrint
  readonly trendinup = TrendingUp
  readonly trendinDown = TrendingDown
  readonly heart = Heart
  readonly Cake = Cake
  readonly mars = Mars
  readonly map = Map
  readonly user = User
  readonly phone = Phone
  readonly Chevronleft = ChevronLeft
  readonly Chevronright = ChevronRight
}
