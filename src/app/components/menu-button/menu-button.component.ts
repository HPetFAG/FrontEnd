import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, LayoutDashboard } from 'lucide-angular';

@Component({
  selector: 'MenuButton',
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css',
})
export class MenuButtonComponent {
  readonly LayoutDashboard = LayoutDashboard;

  @Input() buttonText: any = '';
  @Input() icon: any = LayoutDashboard;
  @Input() routerLink: string | any[] = [];
  @Input() isCollapsed: boolean | undefined;

  /*Definindo se esta em um mobile */
  isMobile = window.innerWidth < 640;

  /*Irá atualizar o valor conforme o tamanho da tela */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 640;
  }

  constructor() {}
}
