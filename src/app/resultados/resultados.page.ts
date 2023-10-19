import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
})
export class ResultadosPage {
  resultados = [
    { ano: '2023', mes: 'Fevereiro', pdfUrl: 'https://www.flipsnack.com/C876F75569B/fevereiro-2023/full-view.html' },
  ];

  constructor() {}

  abrirPDF(pdfUrl: string) {
    window.open(pdfUrl, '_system');
  }
}
