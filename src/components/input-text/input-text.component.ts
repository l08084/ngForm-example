import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'input-text',
  template: `
  <input type="text" class="form-control" [(ngModel)]="value">`,
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
}
