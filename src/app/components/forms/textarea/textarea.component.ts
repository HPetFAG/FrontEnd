import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'FormArea',
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() maxlength: number = 200;
  @Input() value?: string = '';
  @Output() valueChange = new EventEmitter<string>();
}
