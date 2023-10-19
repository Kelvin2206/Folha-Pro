import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
})
export class ResultadosPage {
  resultados = [
    { ano: '2023', mes: 'Janeiro', pdfUrl: 'URL_DO_PDF_JANEIRO' },
    { ano: '2023', mes: 'Fevereiro', pdfUrl: 'blob:https://pdfviewer.softgateon.net/8715a0c0-1fa1-4afd-a6be-56adc457ef24' },
    { ano: '2023', mes: 'Março', pdfUrl: 'URL_DO_PDF_MARCO' },
  ];

  constructor() {}

  abrirPDF(pdfUrl: string) {
    window.open(pdfUrl, '_system');
  }
}
