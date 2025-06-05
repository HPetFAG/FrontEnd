import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animalform',
  imports: [CommonModule],
  templateUrl: './animalform.component.html',

})
export class AnimalformComponent {

  constructor(private router:Router) {}

  Back() {
    this.router.navigate(['/dashboard/animal'])
  }
}
