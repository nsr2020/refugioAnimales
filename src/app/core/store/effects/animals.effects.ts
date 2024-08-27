import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AnimalsService } from "../../services/animals/animals.service";
import { map, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { adoptAnimal, retrieveAnimals, setAnimals } from "../actions/animals.action";

@Injectable()
export class AnimalsEffects {

  retrieveAnimals$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveAnimals),
    switchMap(() => this.animalsService.getAnimals()),
    map((animals) => setAnimals({ animals }))
  ));

  adoptAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(adoptAnimal),
    switchMap(({ animalId }) => this.animalsService.adoptAnimal(animalId)),
    tap(() => this.router.navigate(['/animals'])),
    map(() => retrieveAnimals())
  ));

  constructor(
    private actions$: Actions,
    private animalsService: AnimalsService,
    private router: Router
  ) {}
}
