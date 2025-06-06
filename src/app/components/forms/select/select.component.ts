import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SelectOption<T = any> {
  label: string;
  value: T;
}

@Component({
  selector: 'FormSelect',
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent<T = any> {
   @Input() label: string = '';
  @Input() name: string = '';
  @Input() options: SelectOption<T>[] = [];
  @Input() required: boolean = false;

  @Input() value!: T;
  @Output() valueChange = new EventEmitter<T>();
}
