import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  FileEdit,
  LucideAngularModule,
  MoreHorizontal,
  MoreVertical,
  Search,
} from 'lucide-angular';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';
import { Router } from '@angular/router';
import { FormService } from '../../service/forms/form.service';
import { Form } from '../../models/forms.model';

@Component({
  selector: 'app-formspage',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './formspage.component.html',
})
export class FormspageComponent implements OnInit {
  readonly search = Search;
  readonly ChevronRigth = ChevronRight;
  readonly ChevronLeft = ChevronLeft;
  readonly more = MoreVertical;
  readonly Pen = FileEdit;

  menuOpenId: number | null = null;
  forms: Form[] = [];

  constructor(private route: Router, private formService: FormService) {}

  ngOnInit(): void {
    this.LoadAllForms();
  }

  toggleMenu(id: number) {
    this.menuOpenId = this.menuOpenId === id ? null : id;
  }

  isMenuOpen(id: number): boolean {
    return this.menuOpenId === id;
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Aprovado':
        return 'text-green-700 bg-green-100 px-2 py-2 rounded-full text-sm font-semibold items-center';
      case 'Pendente':
        return 'text-yellow-700 bg-yellow-100 px-2 py-2 rounded-full text-sm font-semibold items-center';
      case 'Recusado':
        return 'text-red-700 bg-red-100 px-2 py-2 rounded-full text-sm font-semibold items-center';
      case 'recebido':
        return 'text-blue-700 bg-blue-100 px-2 py-2 rounded-full text-sm font-semibold items-center';
      default:
        return 'text-gray-700 bg-gray-100 px-2 py-2 rounded-full text-sm font-semibold items-center';
    }
  }

  LoadAllForms(): void {
    this.formService.getForm().subscribe({
      next: (res) => {
        this.forms = res;
        console.log(this.forms);
      },
      error: (err) => {
        console.error('Erro ao carregar formulários:', err);
        // Aqui você pode exibir uma notificação ou mensagem de erro
      },
    });
  }
}
