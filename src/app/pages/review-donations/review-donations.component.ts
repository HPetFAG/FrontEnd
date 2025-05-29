import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Gift,
  LucideAngularModule,
  MessageSquare,
  Star,
  TrendingDown,
  TrendingUp,
} from 'lucide-angular';
import { DonationCardComponent } from '../../components/donation-card/donation-card.component';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { ReviewCardComponent } from '../../components/review-card/review-card.component';

@Component({
  selector: 'app-review-donations',
  imports: [
    LucideAngularModule,
    CommonModule,
    DonationCardComponent,
    BasicCardComponent,
    ReviewCardComponent,
  ],
  templateUrl: './review-donations.component.html',
})
export class ReviewDonationsComponent {
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;
  readonly dollarsign = DollarSign;
  readonly giftcard = Gift;
  readonly star = Star;
  readonly messagesquare = MessageSquare;
  readonly Chevronleft = ChevronLeft;
  readonly Chevronright = ChevronRight;

  activeTab: 'donations' | 'reviews' = 'donations';

  setActive(tab: 'donations' | 'reviews') {
    this.activeTab = tab;
    console.log(`Active tab set to: ${this.activeTab}`);
  }
}
