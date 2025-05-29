import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'ReviewCard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './review-card.component.html',
})
export class ReviewCardComponent {
  readonly star = Star;

  @Input() autor: string = '';
  @Input() date: string = '';
  @Input() rating: number = 0;
  @Input() content: string = '';
;
  get stars() {
    return Array(this.rating);
  }
}
