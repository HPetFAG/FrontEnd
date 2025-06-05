import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cake, Heart, LucideAngularModule, Map, Mars, MoreHorizontal, MoreVertical, PawPrint, Phone, Shield, Syringe, TrendingDown, TrendingUp, User } from 'lucide-angular';

@Component({
  selector: 'AnimalsCard',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './animals-card.component.html',

})
export class AnimalsCardComponent {
  readonly paw = PawPrint;
  readonly trendinup = TrendingUp;
  readonly trendinDown = TrendingDown;
  readonly heart = Heart;
  readonly Cake = Cake;
  readonly mars = Mars;
  readonly map = Map;
  readonly user = User;
  readonly phoneIcon = Phone;
  readonly syringe = Syringe
  readonly shield = Shield
  readonly More = MoreVertical

  @Input() status: 'pending' | 'completed' = 'pending';
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() gender: string = '';
  @Input() location: string = '';
  @Input() adopter: string = '';
  @Input() phone: string = '';
  @Input() photoUrl: string = '';
}
