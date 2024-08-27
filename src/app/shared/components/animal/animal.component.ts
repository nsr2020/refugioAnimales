import { Component, Input } from '@angular/core';
import { Animal } from '../../../core/services/animals/animals.models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent {
  @Input() public animal?: Animal;
  @Input() public showAdoptButton = false;
  @Input() public simplifiedData = false;

  constructor(private router: Router) {}

  public adoptAnimal(): void {
    if (!this.animal) { return; }
    this.router.navigate(['/animals', this.animal.id]);
  }
}
