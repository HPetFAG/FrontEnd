import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'PetApresentation',
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
})
export class PetCardComponent {
  @Input() name: string = '';
  @Input() species: string = '';
  @Input() gender: string = '';
  @Input() age: string = '';
  @Input() size: string = '';
  @Input() description: string = '';
  @Input() id!: number;
  @Output() newForm = new EventEmitter<number>();
}
