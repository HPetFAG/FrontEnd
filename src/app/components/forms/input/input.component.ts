import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'FieldInput',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() fieldName: string = '';
  @Input() required: boolean = false;

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
}
