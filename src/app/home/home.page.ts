import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

})

export class HomePage {
<<<<<<< HEAD
  constructor(private router: Router) {}
  navigateToHoleritePage() {
    this.router.navigate(['/holerite-page']);
  }
  navigateToFolhaPagamento() {
    this.router.navigate(['/folha-pagamento']);
  } 
  navigateToUsuarioForm() {
    this.router.navigate(['/usuario-form']);
  }
}
=======

  constructor(private router: Router) {}

  navigateToHoleritePage() {

    this.router.navigate(['/holerite-page']);

  }

  navigateToFolhaPagamento() {

    this.router.navigate(['/folha-pagamento']);

  }

  navigateToUsuarioForm() {

    this.router.navigate(['/usuario-form']);

  }

}
>>>>>>> bb7a6e3b275f2f453a3de830d5e7ef9f60d5bc27
