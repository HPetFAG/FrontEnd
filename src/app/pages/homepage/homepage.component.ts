import { Component } from '@angular/core';
import { Heart, LucideAngularModule, PawPrint, TrendingDown, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-homepage',
  imports: [LucideAngularModule],
  templateUrl: './homepage.component.html',

})
export class HomepageComponent {
  readonly paw = PawPrint
  readonly trendinup = TrendingUp
    readonly trendinDown = TrendingDown
  readonly heart = Heart
}
