import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Cake,
  Edit,
  Heart,
  LucideAngularModule,
  Map,
  Mars,
  Microchip,
  MoreHorizontal,
  MoreVertical,
  PawPrint,
  Phone,
  Shield,
  Syringe,
  Trash2,
  TrendingDown,
  TrendingUp,
  User,
} from 'lucide-angular';

@Component({
  selector: 'AnimalsCard',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
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
  readonly syringe = Syringe;
  readonly shield = Shield;
  readonly More = MoreVertical;
  readonly microchip = Microchip;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;

  @Input() status: string = '';
  @Input() name: string = '';
  @Input() photoUrl: string = '';
  @Input() species: string = '';
  @Input() gender: string = '';
  @Input() age: string = '';
  @Input() size: string = '';
  @Input() microchipped: boolean = false;
  @Input() vaccinated: boolean = false;
  @Input() castrated: boolean = false;
  @Input() DeleteAnimal?: () => void;
  @Input() id!: number;
  @Output() deleteAnimal = new EventEmitter<number>();

  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
