import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oiacadamy',
  templateUrl: './oiacadamy.component.html',
  styleUrls: ['./oiacadamy.component.scss']
})
export class OIAcadamyComponent {

  constructor(private router: Router) {
  }

  public categoryClick(): void {
    localStorage.setItem('category', 'general');
    this.router.navigate(['details']);
  }

}
