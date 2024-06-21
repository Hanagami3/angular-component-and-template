import { Component } from '@angular/core';

@Component({
  //marche comme un css selecteur
  //je dis à Angular que tous les éléments button dans l'app qui a aussi the appButon attribute 
  //doit êtrecontrôlé par ce component
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
}
