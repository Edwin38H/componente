import { Component, OnInit } from '@angular/core';
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Scroll',
      redirectTo: '/scroll'
    },
    {
      icon:'hammer-outline',
      name:'Input',
      redirectTo:'/input'
      }
  ];
  constructor() { }

  ngOnInit() {
  }

}
