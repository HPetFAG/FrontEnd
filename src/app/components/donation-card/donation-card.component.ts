import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, MessageSquare } from 'lucide-angular';

@Component({
  selector: 'CardDonation',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './donation-card.component.html',

})
export class DonationCardComponent {
  readonly messagesquare = MessageSquare;

  @Input() status: 'pending' | 'completed' = 'pending';
}
