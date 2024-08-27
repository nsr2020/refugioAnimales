import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoading } from './core/store/selectors/loading.selectors';
import { retrieveAnimals } from './core/store/actions/animals.action';
import { LoadingComponent } from './core/components/loading/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showLoading$?: Observable<boolean>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.showLoading$ = this.store.select(selectLoading);
    this.store.dispatch(retrieveAnimals());
  }
}
