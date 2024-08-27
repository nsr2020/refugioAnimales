import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PlatformService } from '../../../services/platform/platform.service';


@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {

  public shouldAnimateDots: boolean = false;

  constructor(
    private platformService: PlatformService
  ) {}

  public ngOnInit(): void {
    this.setAnimation();
  }

  public setAnimation() {
    if (this.platformService.isPlatformServer()) { return; }
    this.shouldAnimateDots = true;
    timer(2500).subscribe(() => {
      this.shouldAnimateDots = false;
      timer(500).subscribe(() => this.setAnimation());
    });
  }

}
