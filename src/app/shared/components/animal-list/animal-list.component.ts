import { Component, Input } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { Animal } from '../../../core/services/animals/animals.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [AnimalComponent, CommonModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss'
})
export class AnimalListComponent {
  @Input() public animals: Animal[] | null = null;
}

