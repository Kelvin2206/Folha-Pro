import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-folha-pagamento',
  templateUrl: './folha-pagamento.page.html',
  styleUrls: ['./folha-pagamento.page.scss'],
})
export class FolhaPagamentoPage {
  constructor(private router: Router) {}

  consultarFolhaPagamento() {
    // Capturar os valores selecionados do ano e do mês, se necessário

    // Redirecionar para a página "resultados"
    this.router.navigate(['/resultados']);
  }
}

