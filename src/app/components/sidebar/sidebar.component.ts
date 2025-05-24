import { Component, HostListener } from '@angular/core';
import {
  LucideAngularModule,
  ChevronLeft,
  LayoutDashboard,
  NotebookText,
  Banknote,
  LogOut,
  MenuIcon,
  Users,
  IdCard,
  Stethoscope,
  HandCoins,
  AlignJustify,
  X,
} from 'lucide-angular';
import { MenuSection } from '../../models/menu-sections/menu.sections';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'sidebar',
  imports: [
    LogoComponent,
    CommonModule,
    LucideAngularModule,
    MenuButtonComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  /*Definindo os icones a ser usado na tela. */
  readonly ArrowBigLeft = ChevronLeft;
  readonly LayoutDashboard = LayoutDashboard;
  readonly NotbookText = NotebookText;
  readonly WalletCardsIcon = Banknote;
  readonly LogOut = LogOut;
  readonly MenuIcon = AlignJustify;
  readonly MenuIconClose = X;
  readonly Users = Users;
  readonly IdCard = IdCard;
  readonly Stethoscope = Stethoscope;
  readonly HandCoins = HandCoins;

  /*Variaveis de estado */
  isSelected = false;
  isCollapsed = true;

  /*Definindo se esta em um mobile */
  isMobile = window.innerWidth < 640;

  /*Irá atualizar o valor conforme o tamanho da tela */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 640;
  }

  /*Irá alternar o estado da side bar entre expandida e recolhida */
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * Iniciando o ciclo do angular
   * O Propio Angular irá veficar se o usuario esta em uma tela pequena,
   * caso sim irá ocultar a exibição inicial da sidebar.
   **/
  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => (this.isCollapsed = false));
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
    this.isCollapsed = false;
  }

  /**
   * Seçoes de side bar
   */

  sections: MenuSection[] = [
    {
      title: 'Painel Principal',
      items: [
        {
          text: 'Pagina principal',
          icon: LayoutDashboard,
          route: 'home',
        },
      ],
    },
    
  ];
}
