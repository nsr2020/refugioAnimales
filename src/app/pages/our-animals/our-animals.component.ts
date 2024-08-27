import { Component, OnInit } from '@angular/core';
import { AnimalListComponent } from '../../shared/components/animal-list/animal-list.component';
import { AnimalsService } from '../../core/services/animals/animals.service';
import { Animal } from '../../core/services/animals/animals.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAnimals } from '../../core/store/selectors/animals.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-animals',
  standalone: true,
  imports: [AnimalListComponent, CommonModule],
  templateUrl: './our-animals.component.html',
  styleUrl: './our-animals.component.scss'
})
export class OurAnimalsComponent implements OnInit {

  public animals$?: Observable<Animal[]>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.animals$ = this.store.select(selectAnimals);
  }


}
