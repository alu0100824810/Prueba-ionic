import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() name: string;
  @Input() showBackButton = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data.main) {
      this.showBackButton = false;
    }
  }

  /**
   * Navega al login
   */
  goToLogin(): void {
    this.router.navigate(['/']);
  }

}
