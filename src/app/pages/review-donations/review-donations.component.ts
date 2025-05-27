import { Component } from '@angular/core';
import { Heart, LucideAngularModule, PawPrint, TrendingDown, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-review-donations',
  imports: [LucideAngularModule],
  templateUrl: './review-donations.component.html',
  styleUrl: './review-donations.component.css',
})
export class ReviewDonationsComponent {
  readonly paw = PawPrint;
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;
  readonly heart = Heart;

}
