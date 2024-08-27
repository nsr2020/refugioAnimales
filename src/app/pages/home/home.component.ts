import { Component, OnInit } from '@angular/core';
import { AnimalListComponent } from '../../shared/components/animal-list/animal-list.component';
import { AnimalsService } from '../../core/services/animals/animals.service';
import { Animal } from '../../core/services/animals/animals.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectOlderAnimals } from '../../core/store/selectors/animals.selectors';
import { CommonModule } from '@angular/common';

const NUMBER_OLD_ANIMALS = 4;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimalListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public oldAnimals$?: Observable<Animal[]>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.oldAnimals$ = this.store.select(selectOlderAnimals);
  }

}
