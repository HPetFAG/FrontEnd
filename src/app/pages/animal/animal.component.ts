import { Component, EventEmitter, Output } from '@angular/core';
import {
  Bone,
  ChevronLeft,
  ChevronRight,
  Dog,
  LoaderIcon,
  LucideAngularModule,
  MapPinCheck,
  Search,
} from 'lucide-angular';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { AnimalsCardComponent } from "../../components/animals-card/animals-card.component";

@Component({
  selector: 'app-animal',
  imports: [LucideAngularModule, BasicCardComponent, AnimalsCardComponent],
  templateUrl: './animal.component.html',
})
export class AnimalComponent {
  readonly Chevronleft = ChevronLeft;
  readonly Chevronright = ChevronRight;
  readonly bone = Bone;
  readonly dog = Dog;
  readonly loanding = LoaderIcon;
  readonly mappin = MapPinCheck;
  readonly search = Search


}
