import { Component } from '@angular/core';
import { LogoComponent } from "../../components/logo/logo.component";
import { Calendar, Heart, LucideAngularModule, MapPinIcon, PawPrint, PinIcon, Search } from 'lucide-angular';
import { PetCardComponent } from "../../components/landing/pet-card/pet-card.component";

@Component({
  selector: 'app-aprensentation',
  imports: [LucideAngularModule, PetCardComponent],
  templateUrl: './aprensentation.component.html',
  styleUrl: './aprensentation.component.css'
})
export class AprensentationComponent {
  readonly Paw = PawPrint
  readonly heart = Heart
  readonly search = Search
  readonly pin = MapPinIcon
  readonly calendar = Calendar
}
