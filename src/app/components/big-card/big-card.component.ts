import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  Id:string="0"
  @Input()
  photoCover:string=""
  @Input()
  photoCoverAlt:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardAuthor:string=""
  @Input()
  cardLink:string=""
  @Input()
  cardDescription:string=""
}
