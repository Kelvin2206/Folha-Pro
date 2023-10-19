import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importe o ToastController

@Component({
  selector: 'app-holerite-page',
  templateUrl: './holerite-page.page.html',
  styleUrls: ['./holerite-page.page.scss'],
})
export class HoleritePagePage {

  constructor(private toastController: ToastController) { }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Formulário cadastrado com sucesso',
      duration: 2000, // A mensagem será exibida por 2 segundos
      color: 'success', // Define a cor como verde
    });
    toast.present();
  }
}
