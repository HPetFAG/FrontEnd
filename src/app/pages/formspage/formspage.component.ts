import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  LucideAngularModule,
  MoreHorizontal,
  MoreVertical,
  Search,
} from 'lucide-angular';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';

@Component({
  selector: 'app-formspage',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './formspage.component.html',
})
export class FormspageComponent {
  readonly search = Search;
  readonly ChevronRigth = ChevronRight;
  readonly ChevronLeft = ChevronLeft;
  readonly more = MoreVertical;

  menuOpenId: number | null = null;

  adocoes = [
    {
      id: 1,
      animal: 'Rex',
      adotante: 'João Silva',
      contato: 'joao@email.com',
      data: '2025-06-01',
      status: 'Aprovado',
    },
    {
      id: 2,
      animal: 'Luna',
      adotante: 'Maria Oliveira',
      contato: 'maria@email.com',
      data: '2025-06-03',
      status: 'Pendente',
    },
    {
      id: 3,
      animal: 'Toby',
      adotante: 'Carlos Souza',
      contato: 'carlos@email.com',
      data: '2025-06-05',
      status: 'Recusado',
    },
  ];

  toggleMenu(id: number) {
    this.menuOpenId = this.menuOpenId === id ? null : id;
  }

  isMenuOpen(id: number): boolean {
    return this.menuOpenId === id;
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Aprovado':
        return 'text-green-700 bg-green-100 px-2 py-1 rounded-full text-sm font-semibold items-center';
      case 'Pendente':
        return 'text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full text-sm font-semibold items-center';
      case 'Recusado':
        return 'text-red-700 bg-red-100 px-2 py-1 rounded-full text-sm font-semibold items-center';
      default:
        return 'text-gray-700 bg-gray-100 px-2 py-1 rounded-full text-sm font-semibold items-center';
    }
  }
}
