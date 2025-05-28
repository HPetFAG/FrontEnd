import { Component } from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-animal',
  imports: [LucideAngularModule],
  templateUrl: './animal.component.html'
})
export class AnimalComponent {
  readonly Chevronleft = ChevronLeft
  readonly Chevronright = ChevronRight
}
