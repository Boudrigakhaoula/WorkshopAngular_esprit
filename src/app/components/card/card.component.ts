import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule]
})
export class CardComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;

  private _btnText: string = 'Voir produits';

  @Input()
  set btnText(value: string) {
    this._btnText = value || 'Voir produits';
  }

  get btnText(): string {
    return this._btnText;
  }

  @Output() addToShortListEvent = new EventEmitter<number>();

  addToShortList() {
    this.addToShortListEvent.emit(this.id);
  }
}
