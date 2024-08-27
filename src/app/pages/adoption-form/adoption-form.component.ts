import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../../shared/components/animal/animal.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalsService } from '../../core/services/animals/animals.service';
import { Animal } from '../../core/services/animals/animals.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { validateDNI } from './custom.validators';
import { Store } from '@ngrx/store';

import { selectAnimalById } from '../../core/store/selectors/animals.selectors';
import { Observable } from 'rxjs';
import { adoptAnimal } from '../../core/store/actions/animals.action';

@Component({
  selector: 'app-adoption-form',
  standalone: true,
  imports: [AnimalComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './adoption-form.component.html',
  styleUrl: './adoption-form.component.scss'
})
export class AdoptionFormComponent implements OnInit {
  public adoptionForm?: FormGroup;
  public animal$?: Observable<Animal | undefined>;
  public animalId: string | null = null;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.setAnimalForm();
    this.setAnimalFromRoute();
  }

  public adoptAnimal(): void {
    if (!this.adoptionForm?.valid || !this.animalId) { return; }
    this.store.dispatch(adoptAnimal({ animalId: this.animalId.toString() }));
    this.adoptionForm.reset();
  }

  private setAnimalFromRoute(): void {
    this.animalId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.animalId) { return; }
    this.animal$ = this.store.select(selectAnimalById(this.animalId));
  }

  private setAnimalForm() {
    this.adoptionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, validateDNI()]),
      age: new FormControl(0, [Validators.required, Validators.max(100), Validators.min(0)]),
      moreAnimals: new FormControl(false),
      animalsInfo: new FormControl('')
    });
  }

}
